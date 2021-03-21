import Btn from "./Btn";

function Question({ question }) {
  return (
    <li className="flex items-center">
      <div className="mr-4">
        {question.isActive === 1 ? <input type="checkbox" checked /> : <input type="checkbox" />}
      </div>
      <div className="flex w-full border-2 mb-2 py-2 px-4 rounded justify-between items-center">
        <div className="flex">
          <span className="px-4 border-r-2">{question.dimension.dimensionTitle}</span>
          <span className="px-4">{question.questionText}</span>
        </div>
        <div>
          <Btn text="Editar" textColor="text-white" bgColor="bg-blue-500" extraClass="mr-4" />
          <Btn text="Excluir" textColor="text-white" bgColor="bg-red-500" />
        </div>
      </div>
    </li>
  );
}

export default Question;
