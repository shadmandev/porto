import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./header.css";
import logo from "../../assets/img/logo.png";

const Header = () => {
    return (
        <>
            <Navbar bg="transparent" expand="lg">
                <Container>
                    <Navbar.Brand href="#">
                        <img src={logo} alt="" srcset="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className="active" href="#">
                                Home
                            </Nav.Link>
                            <Nav.Link href="#">Elements</Nav.Link>
                            <Nav.Link href="#">Features</Nav.Link>
                            <Nav.Link href="#">Pages</Nav.Link>
                            <Nav.Link href="#">Blog</Nav.Link>
                            <Nav.Link href="#">Portfolio</Nav.Link>
                            <Nav.Link href="#">Buy Porto!</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
