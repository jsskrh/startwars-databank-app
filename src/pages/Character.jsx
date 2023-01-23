import { useLocation } from "react-router-dom";
import { Store } from "../utils/Store";
import { useContext } from "react";
import PageTitle from "../components/PageTitle";
import { useState } from "react";
import { useEffect } from "react";

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
  infoText: `mb-2 font-russo text-lg`,
  fetchedText: `capitalize ml-2`,
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
    const fetchData = async () => {
      try {
        let filmArr = [];
        character.films.forEach(async (film) => {
          const response = await fetch(film);
          const fetchedData = await response.json();
          filmArr.push(await fetchedData);
        });
        setFilms(filmArr);

        let speciesArr = [];
        character.species.forEach(async (specie) => {
          const response = await fetch(specie);
          const fetchedData = await response.json();
          speciesArr.push(await fetchedData);
        });
        setSpecies(speciesArr);

        let starshipsArr = [];
        character.starships.forEach(async (starship) => {
          const response = await fetch(starship);
          const fetchedData = await response.json();
          starshipsArr.push(await fetchedData);
        });
        setStarships(starshipsArr);

        let vehiclesArr = [];
        character.vehicles.forEach(async (vehicle) => {
          const response = await fetch(vehicle);
          const fetchedData = await response.json();
          vehiclesArr.push(await fetchedData);
        });
        setVehicles(vehiclesArr);

        const homeworldResponse = await fetch(character.homeworld);
        const homeworldData = await homeworldResponse.json();
        setHomeworld(await homeworldData.name);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [character]);

  return (
    <div className={style.container}>
      <div className={style.containerInner}>
        <PageTitle title={character.name} />
        <div className={style.pageContent}>
          <div className={style.infoBox}>
            <div className={style.wrapper}>
              <h3 className={style.infoBoxHeader}>- Basic Info</h3>
              <p className={style.infoText}>
                Name:{" "}
                <span className={style.fetchedText}>{character.name}</span>
              </p>
              <p className={style.infoText}>
                Gender:{" "}
                <span className={style.fetchedText}>{character.gender}</span>
              </p>
              <p className={style.infoText}>
                Height:{" "}
                <span className={style.fetchedText}>{character.height}</span>
              </p>
              <p className={style.infoText}>
                Weight:{" "}
                <span className={style.fetchedText}>{character.mass}</span>
              </p>
              <p className={style.infoText}>
                Skin Color:{" "}
                <span className={style.fetchedText}>
                  {character.skin_color}
                </span>
              </p>
              <p className={style.infoText}>
                Eye Color:{" "}
                <span className={style.fetchedText}>{character.eye_color}</span>
              </p>
              <p className={style.infoText}>
                Birth Year:{" "}
                <span className={style.fetchedText}>
                  {character.birth_year}
                </span>
              </p>
              <p className={style.infoText}>
                Homeworld:{" "}
                <span className={style.fetchedText}>{homeworld}</span>
              </p>
            </div>
          </div>

          <div className={style.infoBox}>
            <div className={style.wrapper}>
              <h3 className={style.infoBoxHeader}>- Species</h3>
              {species.map((specie) => (
                <p className={style.infoText} key={specie.name}>
                  Name: <span className={style.fetchedText}>{specie.name}</span>
                </p>
              ))}
            </div>
          </div>

          <div className={style.infoBox}>
            <div className={style.wrapper}>
              <h3 className={style.infoBoxHeader}>- Starships</h3>
              {starships.map((starship) => (
                <p className={style.infoText} key={starship.name}>
                  <span className={style.fetchedText}>{starship.name}</span>
                </p>
              ))}
            </div>
          </div>
          <div className={style.infoBox}>
            <div className={style.wrapper}>
              <h3 className={style.infoBoxHeader}>- Vehicles</h3>
              {vehicles.map((vehicle) => (
                <p className={style.infoText} key={vehicle.name}>
                  <span className={style.fetchedText}>{vehicle.name}</span>
                </p>
              ))}
            </div>
          </div>

          <div className={style.infoBox}>
            <div className={style.wrapper}>
              <h3 className={style.infoBoxHeader}>- Films</h3>
              {films.map((film) => (
                <p className={style.infoText} key={film.title}>
                  <span className={style.fetchedText}>{film.title}</span>
                </p>
              ))}
            </div>
          </div>
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
