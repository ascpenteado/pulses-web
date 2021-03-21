import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../contexts/DataContext";
import API from "../services/api";
import Btn from "./Btn";

function Dimension({ dimension }) {
  const { dimensions, setDimensions } = useContext(DataContext);
  const handleDeleteDimension = async (id) => {
    await API.delete(`dimensions/${id}`);
    const data = dimensions.filter((dimension) => dimension.dimensionId !== id);
    setDimensions(data);
  };

  return (
    <div>
      <li className="flex justify-between items-center border-2 mb-2 py-2 px-4 rounded">
        {dimension.dimensionTitle}
        <div>
          <Link to={`dimensions/edit/${dimension.dimensionId}`}>
            <Btn text="Editar" textColor="text-white" bgColor="bg-blue-500" extraClass="mr-4" />
          </Link>
          <Btn
            text="Excluir"
            textColor="text-white"
            bgColor="bg-red-500"
            onClick={() => handleDeleteDimension(dimension.dimensionId)}
          />
        </div>
      </li>
    </div>
  );
}

export default Dimension;
