import { useLocation } from "react-router-dom";
import { Store } from "../utils/Store";
import { useContext } from "react";
import PageTitle from "../components/PageTitle";
import { useState } from "react";
import { useEffect } from "react";
import InfoBox from "../components/InfoBox";
import InfoText from "../components/InfoText";

const style = {
  container: `container text-white w-full mx-auto my-5`,
  containerInner: `mx-[4%] md:mx-[3%] pt-4 md:pt-10`,
  actionButtonContainer: `text-center mt-10`,
  actionButton: `uppercase text-xs border py-4 px-8 rounded-3xl`,
  fav: `hover:text-black hover:bg-[rgb(255,228,0)] hover:border-[rgb(255,228,0)]`,
  rmFav: `hover:text-black hover:bg-[rgb(255,0,0)] hover:border-[rgb(255,0,0)]`,
  pageContent: `grid md:grid-cols-2 lg:grid-cols-3`,
  infoBox: `border`,
  wrapper: `p-5`,
  infoBoxHeader: `font-bold leading-10 mb-2`,
  infoText: `mb-2 font-russo text-lg flex flex-nowrap`,
  fetchedText: `capitalize ml-2 flex align-center flex-1`,
  loadingAnimation: `animate-pulse bg-slate-200 rounded h-3 w-full my-auto`,
};

const Character = () => {
  const location = useLocation();
  const character = location.state;

  const { state, dispatch } = useContext(Store);
  const {
    starwars: { favourites },
  } = state;

  const [films, setFilms] = useState([]);
  const [homeworld, setHomeworld] = useState();
  const [species, setSpecies] = useState([]);
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [filmsFetched, setFilmsFetched] = useState(false);
  const [homeworldFetched, setHomeworldFetched] = useState(false);
  const [speciesFetched, setSpeciesFetched] = useState(false);
  const [starshipsFetched, setStarshipsFetched] = useState(false);
  const [vehiclesFetched, setVehiclesFetched] = useState(false);

  const addFavHandler = () => {
    const exists = favourites.find((char) => char.name === character.name);
    if (exists) {
      return;
    }
    dispatch({ type: "FAV_ADD_CHAR", payload: character });
  };

  const removeFavHandler = () => {
    dispatch({ type: "FAV_REMOVE_CHAR", payload: character });
  };

  useEffect(() => {
    const fetchDataArray = async (charArr, setter, fetchedSetter) => {
      try {
        const promises = charArr.map(async (link) => {
          const response = await fetch(link);
          return response.json();
        });
        const arrData = await Promise.all(promises);
        setter(arrData);
        fetchedSetter(true);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchHomeworldData = async () => {
      try {
        const homeworldResponse = await fetch(character.homeworld);
        const homeworldData = await homeworldResponse.json();
        setHomeworldFetched(true);
        setHomeworld(await homeworldData.name);
      } catch (error) {
        console.log(error);
      }
    };

    fetchHomeworldData();
    fetchDataArray(character.films, setFilms, setFilmsFetched);
    fetchDataArray(character.species, setSpecies, setSpeciesFetched);
    fetchDataArray(character.starships, setStarships, setStarshipsFetched);
    fetchDataArray(character.vehicles, setVehicles, setVehiclesFetched);
  }, [character]);

  return (
    <div className={style.container}>
      <div className={style.containerInner}>
        <PageTitle title={character.name} />
        <div className={style.pageContent}>
          <div className={style.infoBox}>
            <div className={style.wrapper}>
              <h3 className={style.infoBoxHeader}>- Basic Info</h3>
              {[
                { criteria: "Name", data: character.name },
                { criteria: "Gender", data: character.gender },
                { criteria: "Height", data: character.height },
                { criteria: "Weight", data: character.mass },
                { criteria: "Skin Color", data: character.skin_color },
                { criteria: "Eye Color", data: character.eye_color },
                { criteria: "Birth Year", data: character.birth_year },
              ].map((info) => (
                <InfoText
                  style={style}
                  criteria={info.criteria}
                  data={info.data}
                  key={info.criteria}
                />
              ))}
              <InfoText
                style={style}
                criteria="Homeworld"
                data={homeworld}
                homeworldFetched={homeworldFetched}
              />
            </div>
          </div>

          {[
            {
              name: "Species",
              array: species,
              setter: speciesFetched,
              isAvailable: character.species.length === 0 ? false : true,
            },
            {
              name: "Starships",
              array: starships,
              setter: starshipsFetched,
              isAvailable: character.starships.length === 0 ? false : true,
            },
            {
              name: "Vehicles",
              array: vehicles,
              setter: vehiclesFetched,
              isAvailable: character.vehicles.length === 0 ? false : true,
            },
            {
              name: "Films",
              array: films,
              setter: filmsFetched,
              isAvailable: character.films.length === 0 ? false : true,
            },
          ].map((category) => (
            <InfoBox
              style={style}
              array={category.array}
              title={category.name}
              key={category.name}
              isFetched={category.setter}
              isAvailable={category.isAvailable}
            />
          ))}
        </div>
        <div className={style.actionButtonContainer}>
          {favourites.find((char) => char.name === character.name) ? (
            <button
              className={`${style.actionButton} ${style.rmFav}`}
              onClick={removeFavHandler}
            >
              Remove from Favourites
            </button>
          ) : (
            <button
              className={`${style.actionButton} ${style.fav}`}
              onClick={addFavHandler}
            >
              Add to Favourites
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Character;
