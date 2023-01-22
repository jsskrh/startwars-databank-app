import { useContext } from "react";
import { Link } from "react-router-dom";
import { Store } from "../utils/Store";
import { XMarkIcon } from "@heroicons/react/24/outline";
import assets from "../assets";

const style = {
  listItem: `p-4 cursor-pointer`,
  listItemHover: `hover:scale-105 transition`,
  wrapper: ` flex flex-row flex-nowrap relative`,
  imageWrap: `w-[20%] bg-white rounded-l-[8px] relative flex`,
  listImage: `object-cover rounded-bl-[8px]`,
  imagePlaceholder: `text-[#EEDB00] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 font-bold text-3xl`,
  textWrap: `border border-[#9e4f60] rounded-tr-[8px] relative p-2 bg-[#1D1E1F] mb-[14px] w-[80%]`,
  sidebarTextWrap: `w-full rounded-t-[8px] rounded-r-[8px]`,
  shortDesc: `ml-4 md:text-xl flex flex-nowrap w-[60%] justify-between`,
  russo: `font-russo`,
  sidebarShortDesc: `md:text-base w-[unset]`,
  physDesc: `hidden lg:flex flex-nowrap`,
  descText: `ml-3`,
  heroIcon: `h-5 w-5 opacity-30 hover:opacity-100`,
  light: `pb-4 lg:pb-8 relative before:w-1 before:right-[9%] after:w-[20%] after:right-[calc(9%+8px)] before:absolute after:absolute before:bg-[#5a5c5d] after:bg-[#5a5c5d] before:h-1 after:h-1 before:rounded-[4px] after:rounded-[4px]`,
  sidebarLight: `pb-3 mt-2 lg:pb-4 before:left-10 after:left-4 after:w-5`,
  notchContainer: `absolute bg-transparent overflow-hidden bottom-[-14px] h-[14px] w-full left-0 rounded-br-[8px]`,
  notchContainerBefore: `before:w-[70%] before:left-0 before:border-r-[14px] before:border-t-[14px] before:border-r-transparent before:border-t-[#1D1E1F] before:top-auto before:absolute`,
  notchContainerAfter: `after:right-0 after:border-l-[14px] after:border-l-transparent after:w-[10%] after:bottom-0 after:border-t-[#1D1E1F] after:border-t-[14px] after:top-auto after:absolute`,
  sidebarNotchContainerBefore: `rounded-b-[8px] before:w-[50%] before:left-0 before:border-r-[14px] before:border-t-[14px] before:border-r-transparent before:border-t-[#1D1E1F] before:top-auto before:absolute`,
};

const CharacterListItem = ({
  character,
  search,
  sidebar,
  setShowOverlay,
  setShowSidebar,
}) => {
  const { dispatch } = useContext(Store);

  const addSearchHandler = () => {
    dispatch({ type: "SEARCH_ADD_CHAR", payload: character });
  };

  const removeFavHandler = () => {
    dispatch({ type: "FAV_REMOVE_CHAR", payload: character });
  };

  return (
    <li
      className={`${style.listItem} ${
        !sidebar && style.listItemHover
      } list-char`}
      onClick={search && addSearchHandler}
    >
      <Link
        to={`/characters/${character.name.toLowerCase().replace(/\s/g, "-")}`}
        state={character}
      >
        <div className={style.wrapper}>
          {!sidebar && (
            <div className={`${style.imageWrap} list-image-wrap`}>
              <img
                src={assets.starfield}
                alt="star background"
                className={style.listImage}
              />
              <span className={`${style.imagePlaceholder} image-placeholder`}>
                {character.name.charAt(0)}
              </span>
            </div>
          )}
          <div
            className={`${style.textWrap} ${sidebar && style.sidebarTextWrap}`}
          >
            {sidebar && (
              <div
                className={`${style.light} ${
                  sidebar && style.sidebarLight
                } ambient-light`}
              ></div>
            )}
            <div
              className={`${style.shortDesc} ${
                sidebar && style.sidebarShortDesc
              }`}
            >
              <span className={`${style.text} ${!sidebar && style.russo}`}>
                {character.name}
              </span>
              {!sidebar && (
                <div className={style.physDesc}>
                  <span className={style.descText}>H: {character.height}</span>
                  <span className={style.descText}>W: {character.mass}</span>
                </div>
              )}
              {sidebar && (
                <XMarkIcon
                  className={style.heroIcon}
                  onClick={(e) => {
                    e.preventDefault();
                    removeFavHandler();
                  }}
                />
              )}
            </div>
            {!sidebar && (
              <div
                className={`${style.light} ${
                  sidebar && style.sidebarLight
                } ambient-light`}
              ></div>
            )}
            <div
              className={`${style.notchContainer} ${
                !sidebar
                  ? style.notchContainerBefore
                  : style.sidebarNotchContainerBefore
              } ${!sidebar && style.notchContainerAfter}`}
            ></div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default CharacterListItem;
