import './App.css';
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container > 
        <Form>
          <Row>
            <Col md>
              <Form.Group controlid="formEmail">
                <Form.Label>Email adress</Form.Label>
                <Form.Control type="email" placeholder="Example@gmail.com"/>
                <Form.Text className="text-muted">
                  We will never share your email adress
                </Form.Text>
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group controlid="formPasword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="Password" placeholder="Password"/>
              </Form.Group>
            </Col>
          </Row>
          
          
          <Button variant="secondary" type="submit">Login</Button>
        </Form>
        <Card className='mb-3' style={ {color: "black"} } >
          <Card.Img src='https://picsum.photos/200/50'/>
          <Card.Body>
            <Card.Title>Titulo del pais</Card.Title>
            <Card.Text>
              Descripcion de pais bla blabla bla
            </Card.Text>
            <Button variant='primary'> Read More</Button>
          </Card.Body>
        </Card>

        <Breadcrumb>
          <Breadcrumb.Item>Test</Breadcrumb.Item>
          <Breadcrumb.Item>Test2</Breadcrumb.Item>
          <Breadcrumb.Item active>Test3</Breadcrumb.Item>
        </Breadcrumb>

        <Alert variant='success'> This is a buttn</Alert>
        <Button>Test Button</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
