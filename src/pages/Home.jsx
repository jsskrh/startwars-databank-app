import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Store } from "../utils/Store";
import RemoveFav from "../components/RemoveFav";

const style = { container: `container text-white w-full mx-auto` };

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageTotal, setPageTotal] = useState();

  const { state, dispatch } = useContext(Store);
  const {
    starwars: { favourites },
  } = state;

  const removeFavHandler = (character) => {
    dispatch({ type: "FAV_REMOVE_CHAR", payload: character.name });
  };

  const fetchCharacters = async () => {
    try {
      const response = await fetch(
        `https://swapi.dev/api/people/?page=${currentPage}`
      );
      const charactersData = await response.json();
      console.log(charactersData);
      setPageTotal(charactersData.count / charactersData.results.length);
      setCharacters(charactersData.results);

      // localStorage.setItem("characterData", JSON.stringify(characterData));
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
      <div>
        <h2>Favourites</h2>
        {favourites.map((char) => (
          <li>
            <Link
              to={`/characters/${char.toLowerCase().replace(/\s/g, "-")}`}
              state={
                characters.filter((character) => character.name === char)[0]
              }
            >
              {char}
            </Link>
            <RemoveFav character={char} />
          </li>
        ))}
      </div>
    </div>
  );
};

export default Home;
