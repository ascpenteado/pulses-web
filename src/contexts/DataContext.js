import { createContext, useEffect, useState } from "react";
import API from "../services/api";
export const DataContext = createContext({});

const DataProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [dimensions, setDimensions] = useState([]);

  useEffect(() => {
    async function getDimensions() {
      const result = await API.get("dimensions/");
      setDimensions(result.data);
    }

    async function getQuestions() {
      const result = await API.get("questions/");
      setQuestions(result.data);
    }

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
