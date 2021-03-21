import React from "react";
import { Link } from "react-router-dom";

function FormQuestionPage() {
  return (
    <div>
      <form>
        <div className="flex flex-col max-w-md">
          <label>Texto da pergunta:</label>
          <input className="border-2 rounded max-w-md px-2 py-1 my-4" type="text" />
          <select className="rounded-sm p-2 max-w-sm mb-4">
            <option>Estrutura</option>
            <option>Estrutura</option>
          </select>
          <div>
            <button className="bg-green-400 text-white py-1 px-4 rounded mr-4">Salvar</button>
            <Link to="/questions">
              <button className="bg-gray-300 text-gray-900 py-1 px-4 rounded mr-4">Cancelar</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormQuestionPage;
