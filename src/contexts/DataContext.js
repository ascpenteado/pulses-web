import { createContext, useState } from "react";

export const DataContext = createContext({});

const DataProvider = ({ children }) => {
  const [questions, setQuestions] = useState([
    {
      questionId: 1,
      isActive: 1,
      questionText: "Você adora sua carreira?",
      createdAt: "2021-03-20T22:27:23.937Z",
      updatedAt: "2021-03-20T22:31:17.000Z",
      dimension: {
        dimensionId: 2,
        dimensionTitle: "bem-estar",
        createdAt: "2021-03-20T22:28:32.394Z",
        updatedAt: "2021-03-20T22:28:32.394Z",
      },
    },
  ]);
  const [dimensions, setDimensions] = useState([
    {
      dimensionId: 1,
      dimensionTitle: "carreira",
      createdAt: "2021-03-20T22:27:18.746Z",
      updatedAt: "2021-03-20T22:27:18.746Z",
    },
    {
      dimensionId: 2,
      dimensionTitle: "bem-estar",
      createdAt: "2021-03-20T22:28:32.394Z",
      updatedAt: "2021-03-20T22:28:32.394Z",
    },
  ]);

  return (
    <DataContext.Provider value={{ questions, dimensions, setQuestions, setDimensions }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
