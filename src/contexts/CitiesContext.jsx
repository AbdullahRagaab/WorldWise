import { createContext, useEffect, useContext, useReducer, useCallback } from "react";

// Mock data بدل السيرفر
const mockCities = [
  {
    cityName: "Madrid",
    country: "Spain",
    emoji: "🇪🇸",
    date: "2025-07-15T08:22:53.976Z",
    notes: "",
    position: { lat: 40.46635901755316, lng: -3.7133789062500004 },
    id: "17806751",
  },
  {
    cityName: "Berlin",
    country: "Germany",
    emoji: "🇩🇪",
    date: "2025-02-12T09:24:11.863Z",
    notes: "Amazing 😃",
    position: { lat: 52.53586782505711, lng: 13.376933665713324 },
    id: "98443197",
  },
  {
    id: "fe15",
    cityName: "Portugal",
    country: "Portugal",
    emoji: "🇵🇹",
    date: "2025-04-14T08:11:57.059Z",
    notes: "good\n",
    position: { lat: 38.34165619279595, lng: -8.876953125000002 },
  },
  {
    id: "2f1d",
    cityName: "Paris",
    country: "France",
    emoji: "🇫🇷",
    date: "2025-04-14T09:37:50.974Z",
    notes: "",
    position: { lat: 48.817715668996435, lng: 2.3620605468750004 },
  },
  {
    id: "8a2a",
    cityName: "Abu Ḩammad",
    country: "Egypt",
    emoji: "🇪🇬",
    date: "2025-04-14T10:50:25.848Z",
    notes: "",
    position: { lat: 30.475492529541974, lng: 31.63925170898438 },
  },
  {
    id: "7421",
    cityName: "Sharm el-Sheikh",
    country: "Egypt",
    emoji: "🇪🇬",
    date: "2025-10-06T21:25:42.658Z",
    notes: "Sharm el-Sheikh is the best tourist city",
    position: { lat: 27.916766641249065, lng: 34.18945312500001 },
  },
];

const CitiesContext = createContext();

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "cities/loaded":
      return { ...state, isLoading: false, cities: action.payload };

    case "city/loaded":
      return { ...state, isLoading: false, currentCity: action.payload };

    case "city/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };

    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: {},
      };

    case "rejected":
      return { ...state, isLoading: false, error: action.payload };

    default:
      throw new Error("Unknown action type");
  }
}

function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  // Initial load
  useEffect(() => {
    dispatch({ type: "loading" });
    setTimeout(() => {
      dispatch({ type: "cities/loaded", payload: mockCities });
    }, 300); // Simulate async fetch
  }, []);

  const getCity = useCallback(
    async function getCity(id) {
      if (id === currentCity.id) return;

      dispatch({ type: "loading" });
      const city = cities.find((c) => c.id === id);
      if (city) {
        setTimeout(() => {
          dispatch({ type: "city/loaded", payload: city });
        }, 200);
      } else {
        dispatch({ type: "rejected", payload: "City not found" });
      }
    },
    [cities, currentCity.id]
  );

  async function createCity(newCity) {
    dispatch({ type: "loading" });
    const newId = Date.now().toString();
    const city = { ...newCity, id: newId };
    setTimeout(() => {
      dispatch({ type: "city/created", payload: city });
    }, 200);
  }

  async function deleteCity(id) {
    dispatch({ type: "loading" });
    setTimeout(() => {
      dispatch({ type: "city/deleted", payload: id });
    }, 200);
  }

  return (
    <CitiesContext.Provider
      value={{ cities, isLoading, currentCity, error, getCity, createCity, deleteCity }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (!context) throw new Error("CitiesContext used outside CitiesProvider");
  return context;
}

export { CitiesProvider, useCities };
