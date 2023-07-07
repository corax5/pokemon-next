import React from "react";

const tareaFormulario = () => {
  // await axios.post("url", {objeto que sera el body de la peticion})
  return (
    <div>
      <p>Paso 1: crear un input en el html de tipo text</p>
      <p>Paso 2: guardar esa variable del input en un useState</p>
      <p>
        Paso 3: hacer un boton que cuando se de a click (onClick) haga una
        peticion post a localhost/api/sayHello enviando el el body el valor
        guardado en ese useState
      </p>
      <p>Paso 4, mostrar la consola la respuesta</p>
    </div>
  );
};

export default tareaFormulario;