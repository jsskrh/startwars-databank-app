const InfoText = ({ style, criteria, data, homeworldFetched }) => {
  return (
    <p className={style.infoText}>
      {criteria}:{" "}
      <span className={style.fetchedText}>
        {criteria === "Homeworld" ? (
          homeworldFetched === true ? (
            data
          ) : (
            <span className={style.loadingAnimation}></span>
          )
        ) : (
          data
        )}
      </span>
    </p>
  );
};

export default InfoText;
