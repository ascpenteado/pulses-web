import Header from "./components/Header";
import Main from "./components/Main";
import Menu from "./components/Menu";
import { Routes } from "./routes";

function App() {
  return (
    <>
      <Menu />
      <Header />
      <Main>
        <Routes />
      </Main>
    </>
  );
}

export default App;
