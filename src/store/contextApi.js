import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext({
  selectedCategory: null,
  setSelectedCategory: null,
  joke: null,
  setJoke: null,
  smileyid: null,
  setSmileyid: null,
});

export function AppWrapper({ children }) {
  const [selectedCategory, setSelectedCategory] = useState("Random");
  const [joke, setJoke] = useState("");
  const [smileyid, setSmileyid] = useState("");

  useEffect(() => {}, []);

  return (
    <AppContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        joke,
        setJoke,
        setSmileyid,
        smileyid,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
