import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className='fw-bold fs-1 me-5 text-danger ' href="#home">Quiz Hero </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to='home'>Home</Nav.Link>
            <Nav.Link to='topics'>Topics</Nav.Link>
            <Nav.Link to='statistics'>Statistics</Nav.Link>
            <Nav.Link to='blog'>Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;