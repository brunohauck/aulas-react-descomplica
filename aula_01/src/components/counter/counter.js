import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import ButtoClick from './buttonClick';

export default function CounterComp() {

  const [count, setCount] = useState(0);
  const [info, setInfo] = useState('')
  function clickAumentar() {
    //setCount(count + 1);
    console.log('entrou')
    setInfo('Final da aula')
    setCount(count + 1);
  }
        
  return (
    <Container>
        <h1>Exemplo de Hook com Contant API</h1>
        <p>Contador.</p>
        <ButtoClick clickAumentar={clickAumentar}  />
        <h3>Info: {info} - Contador {count} </h3>
    
    </Container>
  );
}

