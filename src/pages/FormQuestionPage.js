import React, { useContext, useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import BtnSmall from "../components/BtnSmall";
import DimensionSelect from "../components/DimensionSelect";
import { DataContext } from "../contexts/DataContext";
import API from "../services/api";
import Header from "../components/Header";

function FormQuestionPage() {
  const history = useHistory();
  const { questions, setQuestions } = useContext(DataContext);
  const [dimensionInput, setDimensionInput] = useState("");
  const [questionInput, setQuestionInput] = useState("");
  let { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = e.target.questionText.value;
    const dimension = e.target[1].value;
    if (id) {
      const request = await API.put(`questions/${id}`, { text, dimension });
      if (request.status === 200) {
        const newState = questions.filter((el) => el.questionId !== Number(id));
        setQuestions([...newState, request.data]);
        history.push("/questions");
      }
    } else {
      const request = await API.post("questions/", { text, dimension });
      if (request.status === 201) {
        const data = [...questions, request.data];
        setQuestions(data);
        history.push("/questions");
      }
    }
  };

  const handleQuestionInputChange = (e) => {
    const value = e.target.value;
    setQuestionInput(value);
  };

  const handleDimensionInputChange = (e) => {
    const value = e.target.value;
    setDimensionInput(value);
  };

  useEffect(() => {
    async function getQuestion() {
      const request = await API.get(`questions/${id}`);
      if (request.status === 200) {
        setQuestionInput(request.data.questionText);
        setDimensionInput(request.data.dimension.dimensionId);
      }
    }
    if (id) {
      getQuestion();
    }
  }, [id]);

  return (
    <div>
      <Header>Pergunta</Header>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col max-w-md">
          <label>Texto da pergunta:</label>
          <input
            className="border-2 rounded max-w-md px-2 py-1 my-4"
            type="text"
            name="questionText"
            value={questionInput}
            onChange={handleQuestionInputChange}
          />
          <DimensionSelect value={dimensionInput} onChange={handleDimensionInputChange} />
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
