import Main from "./components/Main";
import Menu from "./components/Menu";
import DataProvider from "./contexts/DataContext";
import { Routes } from "./routes";

function App() {
  return (
    <>
      <DataProvider>
        <Menu />
        <Main>
          <Routes />
        </Main>
      </DataProvider>
    </>
  );
}

export default App;
