import React from 'react'
import {Container, Nav, Navbar} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const TopNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto active">
          <Nav.Link href="home">Home</Nav.Link>
          <Nav.Link href="features">Features</Nav.Link>
          <Nav.Link href="pricing">Pricing</Nav.Link>
          <Nav.Link href="contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};


export default TopNavbar;