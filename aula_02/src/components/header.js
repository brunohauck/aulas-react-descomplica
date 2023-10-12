import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

function Header({ title }) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>{title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;