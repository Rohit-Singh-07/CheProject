import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";



function NavBar() {
  return (
    <Navbar collapseOnSelect expand="md" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className='text-orange-200'>AmpereAtlas</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/sales">Sales</Nav.Link>
            <Nav.Link as={Link} to="/powgeneration">Consumption</Nav.Link>
            <NavDropdown title="Installation" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/installstate">State wise</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/installregion">
                Region wise
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/instllrenewable">Renewable</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/growth">
                Planwise Growth
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/calculator">Calculator</Nav.Link>
            <Nav.Link eventKey={2} as={Link} to="/about">
              About Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;