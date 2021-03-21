import { Link } from "react-router-dom";
import Btn from "../components/Btn";
import Dimension from "../components/Dimension";

function DimensionsPage() {
  return (
    <div>
      <div className="flex justify-end">
        <Link to="/dimensions/new">
          <Btn text="Criar Dimensão" bgColor="bg-green-400" textColor="text-white" />
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
