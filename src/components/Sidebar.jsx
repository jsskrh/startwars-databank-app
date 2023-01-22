import { Link } from "react-router-dom";
import RemoveFav from "./RemoveFav";
import { useContext } from "react";
import { Store } from "../utils/Store";
import { XMarkIcon } from "@heroicons/react/24/outline";
import PageTitle from "./PageTitle";
import CharacterListItem from "./CharacterListItem";

const style = {
  sidebar: `fixed top-0 left-0 w-80 bottom-0 -translate-x-full transition duration-500 bg-black z-40`,
  sidebarVisible: `translate-x-0`,
  containerInner: `my-5 mx-3 h-full overflow-y-scroll`,
  titleContainer: `pt-[3px] sm:pt-3 md:pt-[59px]`,
  characterList: `h-full`,
  heroIcon: `h-6 w-6 sm:h-8 sm:w-8 cursor-pointer`,
};

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const { state } = useContext(Store);
  const {
    starwars: { favourites },
  } = state;

  return (
    <div className={`${style.sidebar} ${showSidebar && style.sidebarVisible}`}>
      <div className={style.containerInner}>
        <div className={style.titleContainer}>
          <PageTitle
            title="Favourites"
            favourites
            heroIcon={style.heroIcon}
            setShowSidebar={setShowSidebar}
          />
        </div>
        <div className={style.characterList}>
          <ul>
            {favourites.map((character) => (
              // <li>
              //   <Link
              //     to={`/characters/${character.name
              //       .toLowerCase()
              //       .replace(/\s/g, "-")}`}
              //     state={character}
              //   >
              //     {character.name}
              //   </Link>
              //   <RemoveFav character={character} />
              // </li>
              <CharacterListItem character={character} sidebar />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
