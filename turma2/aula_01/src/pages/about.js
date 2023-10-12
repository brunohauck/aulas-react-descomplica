import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function About() {
  return (
    <Card style={{ width: '18rem' }}>

      <Card.Body>
        <Card.Title>Aula Descomplica</Card.Title>
        <Card.Text>
          React Rest API - Redux 
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

