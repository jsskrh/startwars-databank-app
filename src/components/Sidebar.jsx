import { Link } from "react-router-dom";
import RemoveFav from "./RemoveFav";
import { useContext } from "react";
import { Store } from "../utils/Store";
import { XMarkIcon } from "@heroicons/react/24/outline";

const style = {
  sidebar: `fixed top-0 left-0 w-80 h-full -translate-x-full transition duration-500 bg-black`,
  sidebarVisible: `translate-x-0`,
  heroIcon: `h-6 w-6 sm:h-8 sm:w-8`,
};

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const { state } = useContext(Store);
  const {
    starwars: { favourites },
  } = state;

  return (
    <div className={`${style.sidebar} ${showSidebar && style.sidebarVisible}`}>
      <div>
        <h2>Favourites</h2>
        <XMarkIcon
          className={style.heroIcon}
          onClick={() => setShowSidebar(false)}
        />
      </div>
      <ul>
        {favourites.map((character) => (
          <li>
            <Link
              to={`/characters/${character.name
                .toLowerCase()
                .replace(/\s/g, "-")}`}
              state={character}
            >
              {character.name}
            </Link>
            <RemoveFav character={character} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
