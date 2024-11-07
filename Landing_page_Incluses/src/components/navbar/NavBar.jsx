import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import style from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";

function NavScrollExample() {
  const navigate = useNavigate();

  const handleSobreNosClick = () => {
    // Navega para a página que informa quem somos
    navigate("/sobreNos");
  };
  const handleAreaRestritaClick = () => {
    window.location.href = 'https://servletsfinaloficial-2.onrender.com/';
  };



  return (
    <Navbar expand="lg" className="bg-body-tertiary" id={style.navbar}>
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="src\assets\Group 88.png"
            alt="logoInclusis"
            id={style.logo}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <p id={style.inicio}>Início</p>
            <Nav.Link onClick={handleSobreNosClick} id={style.sobrenos}>
              Sobre Nós
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button
              onClick={handleAreaRestritaClick}
              variant="outline-success"
              id={style.acessorestrito}
            >
              Acesso restrito
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
