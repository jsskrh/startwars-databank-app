import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import PageTitle from "../components/PageTitle";
import CharacterListItem from "../components/CharacterListItem";

const style = {
  container: `container text-white w-full mx-auto my-5`,
  containerInner: `mx-[4%] md:mx-[3%] pt-4 md:pt-10`,
};

const Search = ({ query }) => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageTotal, setPageTotal] = useState();
  const [lastPage, setLastPage] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://swapi.dev/api/people/?search=${query}&page=${currentPage}`
      );
      const charactersData = await response.json();
      setCharacters(charactersData.results);
      setPageTotal(charactersData.count / charactersData.results.length);
      setLastPage(
        Math.ceil(
          charactersData.count /
            (Math.ceil(charactersData.results.length / 10) * 10)
        )
      );
    }
    if (query) {
      fetchData();
    } else {
      setCharacters([]);
    }
  }, [query, currentPage]);

  return (
    <div className={style.container}>
      <div className={style.containerInner}>
        <div className={style.content}>
          <PageTitle title="Search Results" />
          <ul>
            {characters.map((character) => (
              <CharacterListItem character={character} search />
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

export default Search;
