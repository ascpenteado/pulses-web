import { ToastContainer } from "react-toastify";
import Main from "./components/Main";
import Menu from "./components/Menu";
import DataProvider from "./contexts/DataContext";
import { Routes } from "./routes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <DataProvider>
        <Menu />
        <Main>
          <Routes />
        </Main>
      </DataProvider>
      <ToastContainer />
    </>
  );
}

export default App;
