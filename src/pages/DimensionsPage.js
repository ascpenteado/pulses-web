import { useContext } from "react";
import { Link } from "react-router-dom";
import Btn from "../components/Btn";
import Dimension from "../components/Dimension";
import Header from "../components/Header";
import { DataContext } from "../contexts/DataContext";

function DimensionsPage() {
  const { dimensions } = useContext(DataContext);
  return (
    <div>
      <Header>Dimensões</Header>
      <div className="flex justify-end">
        <Link to="/dimensions/new">
          <Btn text="Criar Dimensão" bgColor="bg-green-400" textColor="text-white" />
        </Link>
      </div>
      <div>
        <ul className="py-4">
          {dimensions
            ? dimensions
                .sort((a, b) => {
                  return b.dimensionTitle.toLowerCase() - a.dimensionTitle.toLowerCase();
                })
                .map((dimension) => {
                  return <Dimension key={dimension.dimensionId} dimension={dimension} />;
                })
            : "Carregando..."}
        </ul>
      </div>
    </div>
  );
}

export default DimensionsPage;
