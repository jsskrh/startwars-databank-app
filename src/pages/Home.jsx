import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import PageTitle from "../components/PageTitle";
import CharacterListItem from "../components/CharacterListItem";

const style = {
  container: `container text-white w-full mx-auto my-5`,
  containerInner: `mx-[4%] md:mx-[3%] pt-4 md:pt-10`,
  content: ``,
};

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState();

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(
          `https://swapi.dev/api/people/?page=${currentPage}`
        );
        const charactersData = await response.json();
        setLastPage(
          Math.ceil(
            charactersData.count /
              (Math.ceil(charactersData.results.length / 10) * 10)
          )
        );
        setCharacters(charactersData.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCharacters();
  }, [currentPage]);

  return (
    <div className={style.container}>
      <div className={style.containerInner}>
        <div className={style.content}>
          <PageTitle title="Characters" />

          <ul>
            {characters.map((character) => (
              <CharacterListItem character={character} />
            ))}
          </ul>
        </div>
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
