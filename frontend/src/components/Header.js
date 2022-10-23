import React from "react";
import {
  Navbar,
  Container,
  Form,
  Button,
  Nav,
  NavbarBrand,
} from "react-bootstrap";
import { ReactComponent as Logo } from "../Images/image1.svg";
import {LinkContainer} from 'react-router-bootstrap'


const navbarStyle = {
  backgroundColor: "#CD5C5C",
};

const Header = ({ title, Home }) => {
  return (
    <Navbar style={navbarStyle} variant="light" expand="lg">
      <Container fluid>
        <NavbarBrand>
          <Logo
            href="/"
            alt={title}
            style={{ maxWidth: "200rem", maxHeight: "4rem" }}
          />
        </NavbarBrand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/About">About</Nav.Link>
          <Nav.Link href="/About">Story</Nav.Link>
          <Nav.Link href="/About">Career</Nav.Link>
        </Nav>
        <Form className="d-flex">
        <Nav className="me-auto">
          <Form.Control
            className="mb-2"
            xs={9}
            type="search"
            placeholder="Search"
          />
          <Nav.Link className="">
            <Button variant="outline-info" type="submit">
              Search
            </Button>
          </Nav.Link>
        </Nav>
        </Form>
        <Nav className="me-Auto">
        <LinkContainer to="/Login">
          <Nav.Link>Login</Nav.Link>
        </LinkContainer>
        </Nav>
        <Nav>
        <LinkContainer to="/Signup">
        <Nav.Link eventKey="/">Signup</Nav.Link>
        </LinkContainer>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
