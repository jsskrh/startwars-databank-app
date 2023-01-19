import { useState } from "react";
import assets from "../assets";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const style = {
  container: `bg-black h-16 sm:h-[72px] md:h-[120px]`,
  containerInner: `md:p-5 flex justify-between md:justify-start items-center text-white h-full`,
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
};

const Header = () => {
  const [showSearch, setShowSearch] = useState(true);
  return (
    <div className={style.container}>
      <div className={style.containerInner}>
        {showSearch ? (
          <div className={`${style.searchContainer}`}>
            <div className={style.searchBox}>
              <MagnifyingGlassIcon className={style.heroIconMobileSearch} />
              <input type="text" className={style.searchInputMobile} />
              <XMarkIcon
                className={`${style.heroIcon} ${style.xMark}`}
                onClick={() => setShowSearch(false)}
              />
            </div>
          </div>
        ) : (
          <>
            <div className={`${style.mobile} ${style.paddedButton}`}>
              <Bars3Icon className={style.heroIcon} />
            </div>
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
              className={`${style.mobile} ${style.paddedButton}`}
              onClick={() => setShowSearch(true)}
            >
              <MagnifyingGlassIcon className={style.heroIcon} />
            </div>
            <div className={`${style.searchContainer} ${style.desktop}`}>
              <div className={style.searchBox}>
                <input type="text" className={style.searchInput} />
                <MagnifyingGlassIcon className={style.heroIcon} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
