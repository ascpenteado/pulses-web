import { createContext, useEffect, useState } from "react";
import API from "../services/api";
export const DataContext = createContext({});

const DataProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [dimensions, setDimensions] = useState([]);

  const getDimensions = async () => {
    const result = await API.get("dimensions/");
    setDimensions(result.data);
  };

  const getQuestions = async () => {
    const result = await API.get("questions/");
    setQuestions(result.data);
  };

  useEffect(() => {
    getDimensions();
    getQuestions();
  }, []);

  return (
    <DataContext.Provider value={{ questions, dimensions, setQuestions, setDimensions }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
