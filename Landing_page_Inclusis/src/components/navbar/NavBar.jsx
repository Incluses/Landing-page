import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css'

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" id="navbar">
      <Container fluid>
        <Navbar.Brand href="#"><img src="src\assets\WhatsApp_Image_2024-09-03_at_8.26.11_PM-removebg-preview.png" alt="logoInclusis" id='logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" id="sobrenos">Sobre Nós</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button variant="outline-success" id="acessorestrito">Acesso restrito</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;