import React from "react";
import "../css/botonClear.css";

const botonClear = (props) => (
  <button className="boton-clear" onClick={props.manejarClear}>
    {props.children}
  </button>
);

export default botonClear;