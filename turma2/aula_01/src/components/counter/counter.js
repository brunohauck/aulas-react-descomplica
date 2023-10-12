import React, { useState } from "react"
import ButtonClick from "./buttonClick";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [info, setInfo] = useState('Estado Inicial');

  function clickAumentar(){
    console.log('Click');
    setInfo('Mudou o estado');
    setCount(count +1);

  }
  return (
    <>
      <h3>Contador</h3>
      <ButtonClick clickAumentar={clickAumentar} />
      <p>Info: {info}</p>
      <p>Contador: {count}</p>
        
    </>
  );
}
