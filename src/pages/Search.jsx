import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import PageTitle from "../components/PageTitle";
import CharacterListItem from "../components/CharacterListItem";

const style = { container: `container text-white w-full mx-auto` };

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
      console.log(charactersData);
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
      <PageTitle title="Search Results" />
      <ul>
        {characters.map((character) => (
          <CharacterListItem character={character} search />
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        lastPage={lastPage}
      />
    </div>
  );
};

export default Search;
