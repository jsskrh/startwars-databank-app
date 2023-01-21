import { useContext } from "react";
import { Store } from "../utils/Store";

const RemoveFav = ({ character }) => {
  const { dispatch } = useContext(Store);

  const removeFavHandler = () => {
    dispatch({ type: "FAV_REMOVE_CHAR", payload: character });
  };

  return <button onClick={removeFavHandler}>Remove from Favourites</button>;
};

export default RemoveFav;
