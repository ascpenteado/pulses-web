import { Link } from "react-router-dom";
import Question from "../components/Question";

function Questions() {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <span className="mr-4">Filtro:</span>
          <select className="rounded-sm p-2">
            <option>Estrutura</option>
            <option>Estrutura</option>
          </select>
        </div>
        <div>
          <Link to="/questions/new">
            <button className="bg-green-400 text-white py-2 px-5 rounded">Criar Pergunta</button>
          </Link>
        </div>
      </div>
      <div>
        <ul className="py-4">
          <Question />
          <Question />
          <Question />
        </ul>
      </div>
    </div>
  );
}

export default Questions;
