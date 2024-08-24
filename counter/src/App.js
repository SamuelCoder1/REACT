import './App.css';
import freecodecamp from "./img/freecodecamp.png";
import Contador from './componentes/Contador';
import Boton from './componentes/Boton';
import { useState } from 'react';

function App() {

  const [ nClicks, setnClicks ] = useState(0);

  const manejarClick = () => {
    setnClicks(nClicks + 1);
  };

  const reiniciarContador = () => {
    setnClicks(0); 
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freecodecamp}
          alt="Logo de FreeCodeCamp"
        />
      </div>
      <div className="contenedor-principal">

        <Contador 
          nClicks={ nClicks } 
        />

        <div className="contenedor-botones"> 
          <Boton
            texto = "Click"
            botonClick = {true}
            manejarClick = {manejarClick} 
          />

          <Boton
            texto = "Reset"
            botonClick = {false}
            manejarClick = {reiniciarContador}
          />
        </div>

      </div>
    </div>
  );
}

export default App;
