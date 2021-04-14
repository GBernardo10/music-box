// o comando as serve para colocar um apelido para o componente
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";

export default function Rotas() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Inicio} />
      </Switch>
    </Router>
  );
}
