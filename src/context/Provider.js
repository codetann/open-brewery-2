import React, { createContext, useState, useContext } from "react";
import { useToggle } from "../hooks/useToggle";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export default function Provider({ children }) {
  // Hooks
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [navToggle, setNavToggle] = useToggle(false);

  const value = {
    data,
    setData,
    search,
    setSearch,
    navToggle,
    setNavToggle,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
