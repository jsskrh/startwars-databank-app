import { XMarkIcon } from "@heroicons/react/24/outline";

const style = {
  titleContainer: `relative mb-5`,
  title: `before:h-0.5 before:bg-[#5a5c5d] before:w-1 before:bottom-0 before:left-0 before:absolute before:rounded-[2px] after:h-0.5 after:bg-[#5a5c5d] after:w-[calc(100%-8px)] after:bottom-0 after:right-0 after:absolute after:rounded-[2px]`,
  titleText: `text-2xl leading-[2.5rem]`,
  closeIcon: `absolute right-0 top-2 md:top-1`,
};

const PageTitle = ({
  title,
  favourites,
  setShowSidebar,
  heroIcon,
  setShowOverlay,
}) => {
  return (
    <div className={style.titleContainer}>
      <div className={style.title}>
        <h2 className={style.titleText}>{title}</h2>
      </div>
      {favourites && (
        <XMarkIcon
          className={`${heroIcon} ${style.closeIcon}`}
          onClick={() => {
            setShowSidebar(false);
            setShowOverlay(false);
          }}
        />
      )}
    </div>
  );
};

export default PageTitle;
