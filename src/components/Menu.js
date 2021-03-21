import { Link } from "react-router-dom";
function Menu() {
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="w-20"
                  src="https://www.pulses.com.br/assets/images/logo-pulses-branco.svg"
                  alt="Logo Pulses"
                />
              </div>
              <div>
                <div className="ml-12 flex items-baseline space-x-4">
                  <Link to="/" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                    Perguntas
                  </Link>

                  <Link
                    to="/"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Dimensões
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
