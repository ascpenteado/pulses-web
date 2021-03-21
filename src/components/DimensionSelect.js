import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

function DimensionSelect({ onChange, value }) {
  const { dimensions } = useContext(DataContext);

  return (
    <select className="rounded-sm p-2" onChange={onChange} value={value}>
      <option hidden value="">
        Selecionar...
      </option>
      {dimensions
        ? dimensions.map((dimension) => {
            return (
              <option key={dimension.dimensionId} value={dimension.dimensionId}>
                {dimension.dimensionTitle}
              </option>
            );
          })
        : "Criar dimensão"}
    </select>
  );
}

export default DimensionSelect;
