import { Switch, Route } from "react-router-dom";
import DimensionsPage from "./pages/DimensionsPage";
import FormDimensionPage from "./pages/FormDimensionPage";
import QuestionsPage from "./pages/QuestionsPage";
import FormQuestionPage from "./pages/FormQuestionPage";

function Routes() {
  return (
    <Switch>
      <Route path="/dimensions" exact component={DimensionsPage} />
      <Route path="/dimensions/new" exact component={FormDimensionPage} />
      <Route path="/dimensions/edit/:id" exact component={FormDimensionPage} />
      <Route path="/" exact component={QuestionsPage} />
      <Route path="/new" exact component={FormQuestionPage} />
      <Route path="/edit/:id" exact component={FormQuestionPage} />
    </Switch>
  );
}

export { Routes };
