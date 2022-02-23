import React from "react"
import { Navbar, NavDropdown, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import { HiShoppingCart } from "react-icons/hi";

function SecondaryNavbar() {
  return (
<Navbar className="secondary-navbar py-0" expand="lg">
  <Container fluid className="my-0 fluid">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className=" me-auto">
      <Nav.Link className="elem-hover my-1 py-1 text-white" href="#home">Tutte</Nav.Link>
        <Nav.Link className="elem-hover my-1 py-1 text-white" href="#home">Offerte</Nav.Link>
        <Nav.Link className="elem-hover my-1 py-1 text-white" href="#link">Acquista di nuovo</Nav.Link>
        <Nav.Link className="elem-hover my-1 py-1 text-white" href="#link">Amazon basic</Nav.Link>
        <Nav.Link className="elem-hover my-1 py-1 text-white" href="#link">San Valentino</Nav.Link>
        <Nav.Link className="elem-hover my-1 py-1 text-white" href="#link">Cronologia navigazione</Nav.Link>
        <Nav.Link className="elem-hover my-1 py-1 text-white" href="#link">Libri</Nav.Link>
        <Nav.Link className="elem-hover my-1 py-1 text-white" href="#link">Prime</Nav.Link>
        <Nav.Link className="elem-hover my-1 py-1 text-white" href="#link">Toolkit acquirente</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default SecondaryNavbar;