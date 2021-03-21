import { NavLink } from "react-router-dom";
function Menu() {
  return (
    <div>
      <nav className="bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="w-20"
                  src="https://www.pulses.com.br/assets/images/logo-pulses-branco.svg"
                  alt="Logo Pulses"
                />
              </div>
              <div className="flex justify-end">
                <div className="ml-12 flex items-baseline space-x-4">
                  <NavLink to="/questions" className="nav-link">
                    Perguntas
                  </NavLink>

                  <NavLink to="/dimensions" className="nav-link">
                    Dimensões
                  </NavLink>
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
