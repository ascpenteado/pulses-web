function Perguntas() {
  return (
    <div>
      <div>
        <span className="mr-4">Filtro:</span>
        <select className="rounded-sm p-2">
          <option>Estrutura</option>
          <option>Estrutura</option>
        </select>
      </div>
      <div>
        <ul className="py-4">
          <li className="flex  justify-between items-center border-2 mb-2 p-2">
            <div className="mr-4">
              <input type="checkbox" />
            </div>
            <span className="px-4 border-r-2 border-l-2">Estrutura</span>
            <span className="px-4">Você gosta de homeoffice?</span>
            <div>
              <button>Editar</button>
              <button>Excluir</button>
            </div>
          </li>
          <li className="flex items-center border-2 mb-2 p-2">
            <input className="" type="checkbox" />
            <span className="px-4">Estrutura</span>
            <span className="px-4">Você gosta de homeoffice?</span>
            <div>
              <button>Editar</button>
              <button>Excluir</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Perguntas;
