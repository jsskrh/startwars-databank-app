import { useState } from "react";
import assets from "../assets";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const style = {
  container: `bg-black h-16 sm:h-[72px] md:h-[120px] border-b border-[48494a]`,
  containerInner: `md:p-5 flex justify-between items-center text-white h-full`,
  // containerInner: `md:p-5 flex justify-between md:justify-start items-center text-white h-full`,
  heroIcon: `h-6 w-6 sm:h-8 sm:w-8`,
  heroIconMobileSearch: `h-6 w-6 sm:h-8 sm:w-8 ml-4`,
  paddedButton: `p-5`,
  logoContainer: `h-6 sm:h-8 md:h-20 md:mr-10`,
  logo: `max-h-full max-w-full`,
  searchContainer: `flex flex-1 justify-center mx-5`,
  searchBox: `max-w-xl w-full border rounded-lg border-white flex items-center`,
  searchInput: `max-w-xl w-full py-3 px-5  border-white bg-black`,
  searchInputMobile: `max-w-xl w-full py-[6px] px-5  border-white bg-black text-lg`,
  xMark: `mr-5`,
  mobile: `md:hidden`,
  desktop: `hidden md:flex`,

  // searchContainerShow: `w-full h-auto`,
  // searchContainerTransition: `width 0.3s ease-in-out, height 0.3s ease-in-out, margin 0.3s ease-in-out`,
};

const Header = () => {
  const [showSearch, setShowSearch] = useState(true);
  return (
    <div className={style.container}>
      <div className={style.containerInner}>
        <div className={`${style.paddedButton}`}>
          <Bars3Icon className={style.heroIcon} />
        </div>
        {/* <div className={`${style.mobile} ${style.paddedButton}`}>
          <Bars3Icon className={style.heroIcon} />
        </div> */}
        <div className={style.logoContainer}>
          <img
            src={assets.swLogo}
            alt="Logo"
            className={`${style.logo} ${style.mobile}`}
          />
          <img
            src={assets.swLogoStacked}
            alt="Logo"
            className={`${style.logo} ${style.desktop}`}
          />
        </div>
        <div
          className={`${style.paddedButton} bg-[#2f3640] relative flex justify-center`}
          onClick={() => setShowSearch(!showSearch)}
        >
          <input
            className={`border-0 left-0 p-0 text-white bg-black duration-500 order-1 w-0 ${
              showSearch ? `w-[240px] px-[6px]` : ``
            }`}
            type="text"
            name=""
            placeholder="Search"
          />
          <button
            className={`text-white  flex justify-center items-center order-last duration-500 ${
              showSearch ? `bg-white text-black` : ``
            }`}
            onClick={() => {
              showSearch && setShowSearch(false);
            }}
          >
            <MagnifyingGlassIcon className={`${style.heroIcon}`} />
          </button>
        </div>
        {/* <div className={`${style.searchContainer} ${style.desktop}`}>
          <div className={style.searchBox}>
            <input type="text" className={style.searchInput} />
            <MagnifyingGlassIcon className={style.heroIcon} />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
