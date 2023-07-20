import React, { useState } from "react";
import axios from "axios";

function MiBoton() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const tareaFormulario = async () => {
    try {
      const response = await axios.post(
        `http://localhost/api/sayHello`,{inputValue}
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={tareaFormulario}>Enviar</button>
    </div>
  );
}

export default MiBoton;

/*<div>
      <p>Paso 1: crear un input en el html de tipo text</p>
      <p>Paso 2: guardar esa variable del input en un useState</p>
      <p>
        Paso 3: hacer un boton que cuando se de a click (onClick) haga una
        peticion post a localhost/api/sayHello enviando el el body el valor
        guardado en ese useState
        
      </p>
      <p>Paso 4, mostrar la consola la respuesta</p>
    </div>*/