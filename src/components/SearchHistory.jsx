import { useContext } from "react";
import { Store } from "../utils/Store";
import { Link } from "react-router-dom";

const style = {
  container: `absolute bottom-0 right-0 translate-y-[calc(100%+1px)] w-72 bg-black`,
};

const SearchHistory = () => {
  const { state } = useContext(Store);
  const {
    starwars: { searchHistory },
  } = state;

  return (
    <div className={style.container}>
      <div>
        <h2>Search History</h2>
        {searchHistory
          .map((character) => (
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
          ))
          .reverse()
          .slice(0, 3)}
      </div>
    </div>
  );
};

export default SearchHistory;
