import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../contexts/DataContext";
import Btn from "../components/Btn";
import Dimension from "../components/Dimension";
import Header from "../components/Header";
import NoData from "../components/NoData";

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
          {dimensions.length > 0 ? (
            dimensions
              .sort((a, b) => {
                if (b.dimensionTitle.toLowerCase() > a.dimensionTitle.toLowerCase()) {
                  return -1;
                }
                if (b.dimensionTitle.toLowerCase() < a.dimensionTitle.toLowerCase()) {
                  return 1;
                }

                return 0;
              })
              .map((dimension) => {
                return <Dimension key={dimension.dimensionId} dimension={dimension} />;
              })
          ) : (
            <NoData />
          )}
        </ul>
      </div>
    </div>
  );
}

export default DimensionsPage;
