import { Link } from "react-router-dom";
import Dimension from "../components/Dimension";

function DimensionsPage() {
  return (
    <div>
      <div className="flex justify-end">
        <Link to="/dimensions/new">
          <button className="bg-green-400 text-white py-2 px-5 rounded">Criar Dimensão</button>
        </Link>
      </div>
      <div>
        <ul className="py-4">
          <Dimension />
          <Dimension />
          <Dimension />
        </ul>
      </div>
    </div>
  );
}

export default DimensionsPage;
