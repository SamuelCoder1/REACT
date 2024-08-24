import React from "react";

import "../css/Testimonio.css";

function Testimomio(props) {
  return (
    <div className="contenedor-testimonio">

      <img className="img-testimonio" src={require(`../img/${props.imagen}.png`)} alt="Foto de un negro" />

      <div className="contenedor-texto">
        <h3 className="nombre-testimonio">
        <strong>{props.nombre}</strong> en {props.pais}</h3>
        <p className="cargo-testimonio">{props.cargo} en 
        <strong> {props.empresa}</strong></p>
        <p className="texto-testimonio">{props.testimonio}</p>
      </div>

    </div>
  );
}

export default Testimomio;