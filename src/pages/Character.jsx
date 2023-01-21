import { useLocation } from "react-router-dom";
import { Store } from "../utils/Store";
import { useContext } from "react";
import RemoveFav from "../components/RemoveFav";

const style = {
  container: `container text-white w-full mx-auto`,
};

const Character = () => {
  const location = useLocation();
  const character = location.state;
  console.log(location);

  const { state, dispatch } = useContext(Store);
  const {
    starwars: { favourites },
  } = state;

  const addFavHandler = () => {
    const exists = favourites.find((char) => char.name === character.name);
    if (exists) {
      return;
    }
    dispatch({ type: "FAV_ADD_CHAR", payload: character });
  };

  console.log(favourites);

  return (
    <div className={style.container}>
      <div>{character.name}</div>
      {favourites.find((char) => char.name === character.name) ? (
        <RemoveFav character={character} />
      ) : (
        <button onClick={addFavHandler}>Add to Favourites</button>
      )}
    </div>
  );
};

export default Character;
