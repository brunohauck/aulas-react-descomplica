import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import '../App.css';
function Home() {
  return (
    <Container>
      <div className="fill">
      
        <h1>Home</h1>
        <p>Bem-vindo à página inicial!</p>
        <Row>
          <Col xs={6} md={4}>
            <Image src="https://startdev.net/assets/img/blog/b3.jpg" rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src="https://startdev.net/assets/img/blog/b3.jpg" roundedCircle />
          </Col>
          <Col xs={6} md={4}>
            <Image src="https://startdev.net/assets/img/blog/b3.jpg" thumbnail />
          </Col>
        </Row>

      </div>

    </Container>

  );
}

//<a href="https://freeimage.host/i/H6KUNKG"><img src="https://iili.io/H6KUNKG.md.png" alt="H6KUNKG.md.png" border="0"></a>

export default Home;
