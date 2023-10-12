
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default function Header({name}) {
    //console.log(props.name)
    //let nome = props.name;
    return (
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/cadastro">Cadastro</Nav.Link>
            <Nav.Link href="#features">Listar</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    );
}