import { useEffect, useReducer, useState } from "react";

const useFetch = (url) => {
  const initialState = {
    data: [],
    loading: false,
    error: null,
  };

  const reducer = (state, { type, payload }) => {
    switch (type) {
      case "LOADING":
        return { ...state, loading: true };

      case "SUCCESS":
        return { ...state, data: payload, loading: false };
      case "ERROR":
        return { ...state, error: payload };

      default:
        return state;
    }
  };

  const [data, dispatch] = useReducer(reducer, initialState);

  const fetchData = async (url) => {
    dispatch({ type: "LOADING" });
    try {
      const res = await fetch(url);
      const value = await res.json();
      dispatch({ type: "SUCCESS", payload: value });
    } catch (error) {
      console.log(error);
      dispatch({ type: "ERROR", payload: error });
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  return data;
};

export default useFetch;
