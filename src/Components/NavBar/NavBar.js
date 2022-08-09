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
import CartWidget from '../CartWidget/CartWidget';
import { Link, useNavigate } from "react-router-dom";



function NavBarr({ setValor, cantCarrito }) {
  const handleKey = (e) => {
    if (e.key === "Enter") {

      setValor(e.target.value)

    }
  }


  const sendPage = useNavigate();//eslint-disable-next-line
  const loadProductCategory = (categoria) => {
    sendPage(`/category/` + categoria);
  };


  return (
    <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Link to='/'>
          <img src={Logo} alt="" width="50px" />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 gap-4 fs-5 fw-bolder"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="Productos" id="navBarScroll">
                <Link className='dropdown-item' to={'/'}>Todo</Link>
                <Link className='dropdown-item' to={"/category/women's clothing"}>Womens</Link>
                <Link className='dropdown-item' to={"/category/men's%20clothing"}>Mens</Link>
                <Link className='dropdown-item' to={'/category/jewelery'}>Joyas</Link>
                <Link className='dropdown-item' to={'/category/electronics'}>Electronics</Link>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Custom
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#action1" >Info</Nav.Link>
            <Nav.Link href="#action2" >Contacto</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button style={{ border: '1px solid #fff' }} variant="dark" className='me-2'>
              <img src={Lupa} alt='' width="20px" />
            </Button>
            <Form.Control id="search_form"
              type="search"
              placeholder="Search"
              className="mx-2"
              aria-label="Search"

              onKeyUp={handleKey}
            />
          </Form>
          <CartWidget cantCarrito={cantCarrito} />
          <Example />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarr;