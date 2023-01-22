import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";

const style = { container: `container text-white w-full mx-auto` };

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageTotal, setPageTotal] = useState();
  const [lastPage, setLastPage] = useState();

  const fetchCharacters = async () => {
    try {
      const response = await fetch(
        `https://swapi.dev/api/people/?page=${currentPage}`
      );
      const charactersData = await response.json();
      console.log(charactersData);
      setPageTotal(charactersData.count / charactersData.results.length);
      setLastPage(
        Math.ceil(charactersData.count / charactersData.results.length)
      );
      setCharacters(charactersData.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, [currentPage]);

  return (
    <div className={style.container}>
      <ul>
        <li>
          <h2>Characters</h2>
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
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        lastPage={lastPage}
      />
    </div>
  );
};

export default Home;
