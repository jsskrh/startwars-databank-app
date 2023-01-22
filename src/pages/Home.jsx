import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";
import PageTitle from "../components/PageTitle";
import CharacterListItem from "../components/CharacterListItem";

const style = {
  container: `container text-white w-full mx-auto my-5`,
  containerInner: `mx-[4%] md:mx-[3%] pt-4 md:pt-10`,
};

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageTotal, setPageTotal] = useState();
  const [lastPage, setLastPage] = useState();

  const fetchCharacters = async () => {
    try {
      const response = await fetch(
        `https://swapi.dev/api/people/?page=${currentPage}`
      );
      const charactersData = await response.json();
      console.log(charactersData);
      setPageTotal(charactersData.count / charactersData.results.length);
      setLastPage(
        Math.ceil(charactersData.count / charactersData.results.length)
      );
      setCharacters(charactersData.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, [currentPage]);

  return (
    <div className={style.container}>
      <div className={style.containerInner}>
        <PageTitle title="Characters" />

        <ul>
          {characters.map((character) => (
            <CharacterListItem character={character} />
          ))}
        </ul>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          lastPage={lastPage}
        />
      </div>
    </div>
  );
};

export default Home;
