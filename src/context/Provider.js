import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { useToggle } from "../hooks/useToggle";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export default function Provider({ children }) {
  // Hooks
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [navToggle, setNavToggle] = useToggle(false);

  useEffect(() => {
    if (search === "") return;
    axios
      .get(`https://api.openbrewerydb.org/breweries?by_city=${search}`)
      .then((res) => {
        setData(res.data);
      })
      .catch(setError("No Results"));
  }, [search]);

  const value = {
    data,
    setData,
    search,
    setSearch,
    navToggle,
    setNavToggle,
    error,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
