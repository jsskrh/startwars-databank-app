import { useContext } from "react";
import { Store } from "../utils/Store";
import { Link } from "react-router-dom";

const style = {
  container: `absolute bottom-0 right-0 translate-y-[calc(100%+1px)] w-full max-w-[574px] bg-black z-30`,
  containerInner: `p-5`,
  title: `mb-3 font-bold`,
  searchItem: `mb-2 font-russo text-lg cursor-pointer opacity-50 hover:opacity-100`,
};

const SearchHistory = () => {
  const { state } = useContext(Store);
  const {
    starwars: { searchHistory },
  } = state;

  return (
    <div className={style.container}>
      <div className={style.containerInner}>
        <h2 className={style.title}>Search History</h2>
        <ul>
          {searchHistory
            .map((character) => (
              <li className={style.searchItem} key={character.name}>
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
        </ul>
      </div>
    </div>
  );
};

export default SearchHistory;
