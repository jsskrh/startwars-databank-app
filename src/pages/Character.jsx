import { useLocation } from "react-router-dom";

const style = {
  container: `container text-white w-full mx-auto`,
};

const Character = () => {
  const location = useLocation();
  const character = location.state;
  console.log(location);

  return <div className={style.container}>{character.name}</div>;
};

export default Character;
