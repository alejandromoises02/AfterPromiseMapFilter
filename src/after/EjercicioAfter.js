import React, { useState, useEffect, useContext } from "react";
import { AddContext } from "./Context/AddContext";

const promiseEjercicio = () => {
  return new Promise((resolve, reject) => {
    //llama al json
    //resolve(lo que devuelve el json)
    setTimeout(
      () =>
        resolve([
          { id: 29, destacado: true, nombre: "mango", tipo: "fruta"},
          { id: 28, destacado: true, nombre: "papa", tipo: "verdura" },
          { id: 27, destacado: true, nombre: "limon", tipo: "fruta" },
          { id: 56, destacado: true, nombre: "calabaza", tipo: "verdura"},
          { id: 58, destacado: true, nombre: "anana", tipo: "fruta" },
          { id: 59, destacado: true, nombre: "frutilla", tipo: "fruta" },
          { id: 60, destacado: true, nombre: "tomate", tipo: "fruta" },
          { id: 61, destacado: true, nombre: "manzana", tipo: "fruta" },
          { id: 62, destacado: true, nombre: "lechugas", tipo: "verdura" },
        ]),
      100
    );
  });
};

export const EjercicioAfter = () => {
  const [dataToShow, setDataToShow] = useState([]);
  const [agregados, setAgregados] = useContext(AddContext)

  const agregar = (element) =>{
    setAgregados([...agregados, element])
  }

  const ejecutarEjercicio = () => {
    promiseEjercicio().then((data) => {
      const dataFiltrada = data.filter((element) => element.destacado);
      setDataToShow(dataFiltrada);
    });
  };

  useEffect(() => {
    ejecutarEjercicio();
  }, []);

  return (
    <>
      {dataToShow.length == 0 ? (
        <h1>Cargando...</h1>
      ) : (
        <>
          <ul>
            {dataToShow.map((element) => (
              <li key={element.id}>{element.nombre}
              <button onClick={()=> agregar(element)}>Agregar a la lista</button>
              </li>
              
            ))}
          </ul>
        </>
      )}
    </>
  );
};

/*Crea una componente que contenga una promise que se resuelva en 3 segundos (para simular la 
    respuesta de un servidor) el siguiente listado de productos:

[{id:29, destacado: true,nombre:'mango'},
{:id28, destacado: false,nombre:'pera'},
{:id27, destacado: true,nombre:'limon'},
{:id56, destacado: false,nombre:'banana'}]

Debe mostrar los productos destacados.
Debe mostrar la cantidad de productos mostrados
Debe mostrar algun mensaje mientras dure la carga de productos
*/
