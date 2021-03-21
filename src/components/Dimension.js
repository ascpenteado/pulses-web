import Btn from "./Btn";

function Dimension({ dimension }) {
  return (
    <div>
      <li className="flex justify-between items-center border-2 mb-2 py-2 px-4 rounded">
        {dimension.dimensionTitle}
        <div>
          <Btn text="Editar" textColor="text-white" bgColor="bg-blue-500" extraClass="mr-4" />
          <Btn text="Excluir" textColor="text-white" bgColor="bg-red-500" />
        </div>
      </li>
    </div>
  );
}

export default Dimension;
