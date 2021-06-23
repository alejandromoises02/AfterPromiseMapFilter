import React, {useContext} from "react";
import { AddContext } from "./Context/AddContext";

export const Seleccionados = () => {
  const [agregados, setAgregados] = useContext(AddContext);

  return (
    <ul>
      {agregados.map((product, i) => (
        <li key={i}>{product.nombre}</li>
      ))}
    </ul>
  );
};
