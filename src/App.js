import "./App.css";
import { EjercicioAfter } from "./after/EjercicioAfter";
import { EjercicioAfterCategorias } from "./after/EjercicioAfterCategorias";
import NavBar from "./after/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AddProvider } from "./after/Context/AddContext";
import {Seleccionados} from "./after/Seleccionados";

function App() {
  return (
    <div className="App">
      <AddProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <EjercicioAfter />
            </Route>
            <Route exact path="/category/:categoryID">
              <EjercicioAfterCategorias />
            </Route>
            <Route exact path="/seleccionados">
              <Seleccionados />
            </Route>
          </Switch>
        </BrowserRouter>
      </AddProvider>
    </div>
  );
}

export default App;
