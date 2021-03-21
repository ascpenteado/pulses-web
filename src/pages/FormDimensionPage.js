import { useContext, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import BtnSmall from "../components/BtnSmall";
import { DataContext } from "../contexts/DataContext";
import API from "../services/api";
import Header from "../components/Header";

function FormDimensionPage() {
  const { dimensions, setDimensions } = useContext(DataContext);
  const [dimensionInput, setDimensionInput] = useState("");
  const history = useHistory();
  let { id } = useParams();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setDimensionInput(value);
  };

  const handleForm = async (e) => {
    e.preventDefault();
    const title = e.target.dimensionTitle.value;

    // Check if it is an update
    if (id) {
      const request = await API.put(`dimensions/${id}`, { title });
      if (request.status === 200) {
        const newState = dimensions.filter((el) => el.dimensionId !== Number(id));
        setDimensions([...newState, request.data]);
        history.push("/dimensions");
      }
    } else {
      const request = await API.post("dimensions/", { title });
      if (request.status === 201) {
        const data = [...dimensions, request.data];
        setDimensions(data);
        history.push("/dimensions");
      }
    }
  };

  useEffect(() => {
    async function getDimension() {
      const request = await API.get(`dimensions/${id}`);
      if (request.status === 200) {
        setDimensionInput(request.data.dimensionTitle);
      }
    }
    if (id) {
      getDimension();
    }
  }, [id]);

  return (
    <div>
      <Header>Dimensão</Header>
      <form onSubmit={handleForm}>
        <div className="flex flex-col max-w-md">
          <label>Nome da dimensão:</label>
          <input
            className="border-2 rounded max-w-md px-2 py-1 my-4"
            type="text"
            name="dimensionTitle"
            value={dimensionInput}
            onChange={handleInputChange}
          />
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
