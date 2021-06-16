import React, { useState, useEffect } from "react";

const promiseEjercicio = () => {
  return new Promise((resolve, reject) => {
    //llama al json
    //resolve(lo que devuelve el json)
    setTimeout(
      () =>
        resolve([
          { id: 29, destacado: true, nombre: "mango", tipo: "fruta"},
          { id: 28, destacado: false, nombre: "papa", tipo: "verdura" },
          { id: 27, destacado: true, nombre: "limon", tipo: "fruta" },
          { id: 56, destacado: false, nombre: "calabaza", tipo: "verdura"},
          { id: 57, destacado: true, nombre: "anana", tipo: "fruta" },
        ]),
      3000
    );
  });
};

export const EjercicioAfter = () => {
  const [dataToShow, setDataToShow] = useState([]);

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
              <li key={element.id}>{element.nombre}</li>
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
