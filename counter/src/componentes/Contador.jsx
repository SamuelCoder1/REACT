import React from 'react';
import "../css/contador.css";

function Contador ({ nClicks }) {
  return (
    <div className="contador">
      <h1>Contador: { nClicks }</h1>
    </div>
  );
}

export default Contador;