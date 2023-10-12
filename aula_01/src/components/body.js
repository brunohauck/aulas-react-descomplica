import React from 'react';
import { Container } from 'react-bootstrap';
import CounterComp from './counter/counter';
function Body() {
  return (
    <Container>
      
        <h1>Bem-vindo ao Meu App</h1>
        <p>Este é o corpo do aplicativo.</p>
    
        <br />
        <CounterComp />
    </Container>
  );
}

export default Body;