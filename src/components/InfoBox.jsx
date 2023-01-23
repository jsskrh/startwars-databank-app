const InfoBox = ({ style, array, title }) => {
  return (
    <div className={style.infoBox}>
      <div className={style.wrapper}>
        <h3 className={style.infoBoxHeader}>- {title}</h3>
        {array.map((item) => (
          <p
            className={style.infoText}
            key={item.name ? item.name : item.title}
          >
            <span className={style.fetchedText}>
              {item.name ? item.name : item.title}
            </span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default InfoBox;
