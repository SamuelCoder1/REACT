import React from 'react';
import './App.css';
import Testimonio from './componentes/Testimonio'; 

function App() {
  return (
    <div className="App">
      <h1>FreeCodeCamp</h1>
      <div className="contenedor-principal">
        <Testimonio 
        nombre = "Samuel"
        pais = "Colombia"
        imagen = "samuel"
        cargo = "Desarrollador de software"
        empresa = "Spotify"
        testimonio = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat expedita amet quasi et aperiam, sunt facere dolorum? Minus, hic laborum eos asperiores a, illo ab optio quidem dolores, corrupti itaque." />

        <Testimonio 
        nombre = "Carol"
        pais = "Suiza"
        imagen = "carol"
        cargo = "Ingeniero de software"
        empresa = "Postobon"
        testimonio = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat expedita amet quasi et aperiam, sunt facere dolorum? Minus, hic laborum eos asperiores a, illo ab optio quidem dolores, corrupti itaque." />

        <Testimonio 
        nombre = "Camila"
        pais = "Panama"
        imagen = "camila"
        cargo = "Desarrollador de software"
        empresa = "RIWI"
        testimonio = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat expedita amet quasi et aperiam, sunt facere dolorum? Minus, hic laborum eos asperiores a, illo ab optio quidem dolores, corrupti itaque." />

      </div>
    </div>
  );
}

export default App;