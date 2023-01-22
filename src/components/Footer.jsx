const style = {
  footer: `px-10 py-5 flex justify-center bg-black border-t border-[#48494a] z-20`,
  footerText: `text-white text-sm`,
  boldText: `font-bold`,
};

const Footer = () => {
  return (
    <div className={style.footer}>
      <p className={style.footerText}>
        Made by <span className={style.boldText}>Jesse Akorah</span>
      </p>
    </div>
  );
};

export default Footer;
