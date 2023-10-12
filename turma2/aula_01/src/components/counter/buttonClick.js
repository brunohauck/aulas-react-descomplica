import React from "react"

export default function ButtonClick({clickAumentar}) {
  return (
    <> 
        <p>Componente Click Aumentar</p>
        <button onClick={clickAumentar}>Aumentar</button>
    </>
  );
}

