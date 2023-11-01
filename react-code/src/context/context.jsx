import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

const initialVal = {
  products: [],
  loading: "",
  error: "",
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialVal);

  const fetchData = async () => {
    try {
      dispatch({ type: "LOADING" });
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      dispatch({ type: "SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "ERROR", payload: error });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

const useGlobleContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobleContext };
