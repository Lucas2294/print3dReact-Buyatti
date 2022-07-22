import './NavBarcss.css'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './logo.png';
import Lupa from './lupa.png';
import Example from '../Login/Login';


function NavBarr() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={Logo} alt="" width="50px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 gap-4 fs-5 fw-bolder"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="Productos" id="navBarScroll">
              <NavDropdown.Item href="#action3">Todo</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Gadget
              </NavDropdown.Item>
              <NavDropdown.Item href="#action3">Macetas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Custom
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#action1" >Info</Nav.Link>
            <Nav.Link href="#action2" >Contacto</Nav.Link>
          </Nav>
          <Form className="d-flex">
          <Button style={{ border: '1px solid #fff' }} variant="dark">
            <img src={Lupa} alt='' width="20px"/>
          </Button>
            <Form.Control
              type="search"
              placeholder="Search"
              className="mx-2"
              aria-label="Search"
            />
          </Form>
          <Example/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarr;