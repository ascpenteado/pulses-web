import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import BtnSmall from "../components/BtnSmall";
import { DataContext } from "../contexts/DataContext";
import API from "../services/api";

function FormDimensionPage() {
  const history = useHistory();
  const { dimensions, setDimensions } = useContext(DataContext);
  const handleForm = async (e) => {
    e.preventDefault();
    const title = e.target.dimensionTitle.value;
    const request = await API.post("dimensions/", { title });
    if (request.status === 201) {
      const data = [...dimensions, request.data];
      setDimensions(data);
      history.push("/dimensions");
    }
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <div className="flex flex-col max-w-md">
          <label>Nome da dimensão:</label>
          <input className="border-2 rounded max-w-md px-2 py-1 my-4" type="text" name="dimensionTitle" />
          <div>
            <BtnSmall text="Salvar" bgColor="bg-green-400" extraClass="mr-4" textColor="text-white" />
            <Link to="/dimensions">
              <BtnSmall text="Cancelar" bgColor="bg-gray-300" extraClass="mr-4" textColor="text-gray-900" />
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormDimensionPage;
