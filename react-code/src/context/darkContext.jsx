import { createContext, useContext, useState } from "react";

const DarkContext = createContext();

const DarkProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  const handleDarkMode = () => {
    setDark((prev) => !prev);
  };
  return (
    <DarkContext.Provider value={{ dark, handleDarkMode }}>
      {children}
    </DarkContext.Provider>
  );
};

export const useDarkMode = () => {
  return useContext(DarkContext);
};

export { DarkContext, DarkProvider };
