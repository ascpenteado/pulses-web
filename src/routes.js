import { Switch, Route } from "react-router-dom";
import Perguntas from "./pages/Perguntas";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Perguntas} />
    </Switch>
  );
}

export { Routes };
