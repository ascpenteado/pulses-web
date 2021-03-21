import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import BtnSmall from "../components/BtnSmall";
import DimensionSelect from "../components/DimensionSelect";
import { DataContext } from "../contexts/DataContext";
import API from "../services/api";
import Header from "../components/Header";

function FormQuestionPage() {
  const history = useHistory();
  const { questions, setQuestions } = useContext(DataContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = e.target.questionText.value;
    const dimension = e.target[1].value;
    const request = await API.post("questions/", { text, dimension });

    if (request.status === 201) {
      const data = [...questions, request.data];
      setQuestions(data);
      history.push("/questions");
    }
  };
  return (
    <div>
      <Header>Pergunta</Header>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col max-w-md">
          <label>Texto da pergunta:</label>
          <input className="border-2 rounded max-w-md px-2 py-1 my-4" type="text" name="questionText" />
          <DimensionSelect />
          <div className="mt-4">
            <BtnSmall text="Salvar" bgColor="bg-green-400" extraClass="mr-4" textColor="text-white" />
            <Link to="/questions">
              <BtnSmall text="Cancelar" bgColor="bg-gray-300" extraClass="mr-4" textColor="text-gray-900" />
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormQuestionPage;
