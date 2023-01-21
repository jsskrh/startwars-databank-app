import { useLocation } from "react-router-dom";

const style = {
  container: `container text-white w-full mx-auto`,
};

const Character = () => {
  const location = useLocation();
  const character = location.state;
  console.log(location);

  return (
    <div className={style.container}>
      <div>{character.name}</div>
      <button>Add to Favourites</button>
      <button>Remove from Favourites</button>
    </div>
  );
};

export default Character;
