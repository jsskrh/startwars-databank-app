import { useEffect, useState } from "react";

const style = { container: `container text-white w-full mx-auto` };

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageTotal, setPageTotal] = useState();

  const fetchCharacters = async () => {
    try {
      const response = await fetch(
        `https://swapi.dev/api/people/?page=${currentPage}`
      );
      const charactersData = await response.json();
      console.log(charactersData);
      setPageTotal(charactersData.count / charactersData.results.length);
      setCharacters(charactersData.results);

      // localStorage.setItem("characterData", JSON.stringify(characterData));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, [currentPage]);

  return (
    <div className={style.container}>
      <ul>
        {characters.map((character) => (
          <li>{character.name}</li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        {currentPage}
        <button
          onClick={() =>
            currentPage < pageTotal && setCurrentPage(currentPage + 1)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
