const InfoBox = ({ style, array, title, isFetched, isAvailable }) => {
  return (
    <div className={style.infoBox}>
      <div className={style.wrapper}>
        <h3 className={style.infoBoxHeader}>- {title}</h3>
        {isAvailable ? (
          isFetched ? (
            array.map((item) => (
              <p
                className={style.infoText}
                key={item.name ? item.name : item.title}
              >
                <span className={style.fetchedText}>
                  {item.name ? item.name : item.title}
                </span>
              </p>
            ))
          ) : (
            <p className={style.infoText}>
              <span className={style.fetchedText}>
                <span className={style.loadingAnimation}></span>
              </span>
            </p>
          )
        ) : (
          <p className={style.infoText}>
            <span className={style.fetchedText}>Unavailable</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default InfoBox;
