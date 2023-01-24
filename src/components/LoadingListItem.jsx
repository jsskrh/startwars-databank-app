const style = {
  container: `p-4 w-full animate-pulse`,
  placeholder: `flex flex-1 bg-[#555] h-[72px] md:h-[76px] lg:h-[103px] rounded-[8px] rounded-tl-none`,
};

const LoadingListItem = () => {
  return (
    <li className={style.container}>
      <div className={style.placeholder}></div>
    </li>
  );
};

export default LoadingListItem;
