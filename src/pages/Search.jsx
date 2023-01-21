import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const style = { container: `container text-white w-full mx-auto` };

const Search = ({ query }) => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageTotal, setPageTotal] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://swapi.dev/api/people/?search=${query}&page=${currentPage}`
      );
      const charactersData = await response.json();
      setCharacters(charactersData.results);
      console.log(charactersData);
      setPageTotal(charactersData.count / charactersData.results.length);
    }
    if (query) {
      fetchData();
    } else {
      setCharacters([]);
    }
  }, [query, currentPage]);

  return (
    <div className={style.container}>
      <ul>
        <li>
          <h2>Search Results</h2>
        </li>
        {characters.map((character) => (
          <li>
            <Link
              to={`/characters/${character.name
                .toLowerCase()
                .replace(/\s/g, "-")}`}
              state={character}
            >
              {character.name}
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        {currentPage}
        <button
          onClick={() =>
            currentPage < pageTotal && setCurrentPage(currentPage + 1)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Search;
