import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



const promiseEjercicio = () => {
  return new Promise((resolve, reject) => {
        resolve([
          { id: 29, destacado: true, nombre: "mango", categoria: "frutas"},
          { id: 28, destacado: false, nombre: "papa", categoria: "verduras" },
          { id: 27, destacado: true, nombre: "limon", categoria: "frutas" },
          { id: 56, destacado: false, nombre: "calabaza", categoria: "verduras"},
          { id: 57, destacado: true, nombre: "anana", categoria: "frutas" },
        ])
  });
};

export const EjercicioAfterCategorias = () => {
  const [dataToShow, setDataToShow] = useState([]);
  const { categoryID } = useParams();

  const ejecutarEjercicio = () => {
    promiseEjercicio().then((data) => {
      const dataFiltrada = data.filter(element => element.categoria == categoryID);
      setDataToShow(dataFiltrada);
    });
  };

  useEffect(() => {
    ejecutarEjercicio();
  }, [categoryID]);

  return (
    <>
      
         <ul>
            {dataToShow.map((element) => (
              <li key={element.id}>{element.nombre}</li>
            ))}
          </ul>
      
    </>
  );
};

