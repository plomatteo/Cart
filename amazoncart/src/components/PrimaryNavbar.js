import React from "react"
import { Navbar, NavDropdown, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import { HiShoppingCart } from "react-icons/hi";
import { useGlobalContext } from "../context/context";
import logo from "../logoAmazon.png";

function PrimaryNavbar() {
    const {itemCounter} = useGlobalContext();
    return (
        <Navbar className="main-navbar my-0 py-0" expand="lg">
            <Container fluid>
                <Navbar.Brand className="elem-hover my-0 py-1 text-white" href="#"><img src={logo} alt="logo Amazon" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 d-flex align-items-center"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className="elem-hover my-1 py-1 text-white" href="#action1" >Invia a Matteo <br /> Meolo 30020</Nav.Link>
                        <Form className="d-flex">
                        <FormControl
                            type="search"
                            className="me-2"
                            id="search"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    </Nav>
                    <Nav.Link href="#action2" className="elem-hover my-1 py-1 text-white">Ciao Matteo,<br/>Account e liste</Nav.Link>
                    <Nav.Link href="#action2" className="elem-hover my-1 py-1 text-white">Resi<br /> e ordini</Nav.Link>
                    <div className="nav-cart d-flex px-5">
                    <HiShoppingCart />
                    <div className="cart-counter">{itemCounter}</div>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default PrimaryNavbar;