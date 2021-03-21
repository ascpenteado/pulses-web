import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import Question from "../components/Question";
import Btn from "../components/Btn";
import DimensionSelect from "../components/DimensionSelect";

function Questions() {
  const { questions, dimensions } = useContext(DataContext);
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <span className="mr-4">Filtro:</span>
          <DimensionSelect />
        </div>
        <div>
          <Link to="/questions/new">
            <Btn text="Criar Pergunta" bgColor="bg-green-400" textColor="text-white" />
          </Link>
        </div>
      </div>
      <div>
        <ul className="py-4">
          {questions
            ? questions.map((question) => {
                return <Question key={question.questionId} question={question} />;
              })
            : "Carregando..."}
        </ul>
      </div>
    </div>
  );
}

export default Questions;
