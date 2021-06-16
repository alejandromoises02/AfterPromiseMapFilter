import "./App.css";
import { EjercicioAfter } from "./after/EjercicioAfter";
import { EjercicioAfterCategorias } from "./after/EjercicioAfterCategorias";
import NavBar from "./after/NavBar";
import { SegundaVista } from "./after/SegundaVista";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Switch>
          <Route exact path="/">
          <EjercicioAfter />
          </Route>
          <Route exact path="/category/:categoryID">
          <EjercicioAfterCategorias />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;


