import { createContext, useReducer } from "react";
import Cookies from "js-cookie";

export const Store = createContext();

const initialState = {
  starwars: Cookies.get("starwars")
    ? JSON.parse(Cookies.get("starwars"))
    : { favourites: [], searchHistory: [] },
};

function reducer(state, action) {
  switch (action.type) {
    case "FAV_ADD_CHAR": {
      const newChar = action.payload;
      const favourites = [...state.starwars.favourites, newChar];
      Cookies.set(
        "starwars",
        JSON.stringify({ ...state.starwars, favourites })
      );
      return { ...state, starwars: { ...state.starwars, favourites } };
    }

    case "FAV_REMOVE_CHAR": {
      const favourites = state.starwars.favourites.filter(
        (char) => char.name !== action.payload.name
      );
      Cookies.set(
        "starwars",
        JSON.stringify({ ...state.starwars, favourites })
      );
      return { ...state, starwars: { ...state.starwars, favourites } };
    }

    case "SEARCH_ADD_CHAR": {
      const newChar = action.payload;
      const exists = state.starwars.searchHistory.find(
        (char) => char.name === newChar.name
      );

      const searchHistory = exists
        ? [
            ...state.starwars.searchHistory.filter(
              (char) => char.name !== action.payload.name
            ),
            newChar,
          ]
        : [...state.starwars.searchHistory, newChar];

      Cookies.set(
        "starwars",
        JSON.stringify({ ...state.starwars, searchHistory })
      );
      return { ...state, starwars: { ...state.starwars, searchHistory } };
    }

    case "FAV_CLEAR_CHARS":
      return { ...state, starwars: { ...state.starwars, favourites: [] } };

    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
