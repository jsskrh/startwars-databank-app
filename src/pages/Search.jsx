import { useEffect, useState } from "react";
import SearchChar from "../components/SearchChar";
import Pagination from "../components/Pagination";

const style = { container: `container text-white w-full mx-auto` };

const Search = ({ query }) => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageTotal, setPageTotal] = useState();
  const [lastPage, setLastPage] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://swapi.dev/api/people/?search=${query}&page=${currentPage}`
      );
      const charactersData = await response.json();
      setCharacters(charactersData.results);
      console.log(charactersData);
      setPageTotal(charactersData.count / charactersData.results.length);
      setLastPage(
        Math.ceil(charactersData.count / charactersData.results.length)
      );
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
          <SearchChar character={character} />
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        lastPage={lastPage}
      />
    </div>
  );
};

export default Search;
