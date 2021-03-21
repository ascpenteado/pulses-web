import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { DataContext } from "../contexts/DataContext";
import Question from "../components/Question";
import Btn from "../components/Btn";
import Header from "../components/Header";
import DimensionFilter from "../components/DimensionFilter";

function Questions() {
  const { questions, setQuestions } = useContext(DataContext);
  const [filteredQuestions, setFilteredQuestions] = useState([...questions]);
  const applyFilter = async (e) => {
    const value = e.target.value;
    if (value === "all") {
      setFilteredQuestions([...questions]);
    } else {
      const filtered = questions.filter((question) => question.dimension.dimensionId === Number(value));
      setFilteredQuestions(filtered);
    }
  };
  return (
    <div>
      <Header>Perguntas</Header>
      <div className="flex justify-between">
        <div>
          <span className="mr-4">Filtro:</span>
          <DimensionFilter onChange={applyFilter} />
        </div>
        <div>
          <Link to="/questions/new">
            <Btn text="Criar Pergunta" bgColor="bg-green-400" textColor="text-white" />
          </Link>
        </div>
      </div>
      <div>
        <ul className="py-4">
          {filteredQuestions
            ? filteredQuestions.map((question) => {
                return <Question key={question.questionId} question={question} />;
              })
            : "Carregando..."}
        </ul>
      </div>
    </div>
  );
}

export default Questions;
