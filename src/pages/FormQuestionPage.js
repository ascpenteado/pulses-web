import React from "react";
import { Link } from "react-router-dom";
import BtnSmall from "../components/BtnSmall";

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
