import { useContext } from "react";
import { Store } from "../utils/Store";
import { Link } from "react-router-dom";

const style = {};

const SearchChar = ({ character }) => {
  const { state, dispatch } = useContext(Store);
  const {
    starwars: { searchHistory },
  } = state;

  const addSearchHandler = () => {
    dispatch({ type: "SEARCH_ADD_CHAR", payload: character });
  };

  return (
    <li onClick={addSearchHandler}>
      <Link
        to={`/characters/${character.name.toLowerCase().replace(/\s/g, "-")}`}
        state={character}
      >
        {character.name}
      </Link>
    </li>
  );
};

export default SearchChar;
