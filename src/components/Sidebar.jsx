import { useContext } from "react";
import { Store } from "../utils/Store";

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

const Sidebar = ({ showSidebar, setShowSidebar, setShowOverlay }) => {
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
            setShowOverlay={setShowOverlay}
          />
        </div>
        <div className={style.characterList}>
          <ul>
            {favourites.map((character) => (
              <CharacterListItem character={character} sidebar />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
