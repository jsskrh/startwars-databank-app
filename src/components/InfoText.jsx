const InfoText = ({ style, criteria, data }) => {
  return (
    <p className={style.infoText}>
      {criteria}: <span className={style.fetchedText}>{data}</span>
    </p>
  );
};

export default InfoText;
