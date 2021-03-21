import Btn from "./Btn";

function Dimension() {
  return (
    <div>
      <li className="flex justify-between items-center border-2 mb-2 py-2 px-4 rounded">
        Estrutura
        <div>
          <Btn text="Excluir" textColor="text-white" bgColor="bg-red-500" />
        </div>
      </li>
    </div>
  );
}

export default Dimension;
