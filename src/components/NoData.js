import { Link } from "react-router-dom";
import BtnSmall from "./BtnSmall";

function NoData() {
  return (
    <div className="flex justify-center mt-8 items-center">
      <div className="bg-gray-200 w-2/3 p-4 rounded">
        <h2 className="text-lg mb-4 font-bold text-gray-700">Instruções de uso</h2>
        <ol className="list-decimal pl-4">
          <li className="mb-4">
            Cadastre ao menos uma dimensão
            <Link to="dimensions/new">
              <BtnSmall bgColor="bg-blue-500" text="Cadastrar agora" textColor="text-white" extraClass="ml-4 text-sm" />
            </Link>
          </li>
          <li className="mb-4">
            Cadastre a sua primeira pergunta
            <Link to="/new">
              <BtnSmall bgColor="bg-blue-500" text="Cadastrar agora" textColor="text-white" extraClass="ml-4 text-sm" />
            </Link>
          </li>
          <li>Cada pergunta só poderá ter uma única dimensão associada</li>
        </ol>
      </div>
    </div>
  );
}

export default NoData;
