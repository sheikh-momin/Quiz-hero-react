import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';


function NavBar() {
  return (
    <Navbar className='shadow mb-5' bg="light" expand="lg">
      <Container>
        <Navbar.Brand className='fw-bold fs-1 me-5 text-danger ' href="#home">Quiz Hero </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="text-decoration-none fs-5 text-dark fw-semibold mx-5" to='/home'>Home</NavLink>
            <NavLink className="text-decoration-none fs-5 text-dark fw-semibold me-5" to='/topics'>Topics</NavLink>
            <NavLink className="text-decoration-none fs-5 text-dark fw-semibold me-5" to='/statistics'>Statistics</NavLink>
            <NavLink className="text-decoration-none fs-5 text-dark fw-semibold me-5" to='/blog'>Blog</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;