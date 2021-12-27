import { Container, Nav, Navbar } from "react-bootstrap"
import React from "react"
import styled from "styled-components"

const StyledNavBar = styled(Navbar)`
  .nav-link {
    text-align: center;
    font-family: "Kaushan Script", cursive;
    font-size: 2rem;
    color: #ef476f !important;
  }

  .navbar-dark .navbar-nav .nav-link {
    color: #ef476f;
  }

  .navbar-toggler:focus {
    box-shadow: 0 0 0 0.25rem rgba(239, 71, 111, 0.5);
  }
`

export const TopMenu = () => (
  <StyledNavBar
    collapseOnSelect
    expand={false}
    bg="dark"
    variant="dark"
    sticky="top"
  >
    <Container>
      <Navbar.Brand href="/">JBCNConf</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/talks">Talks</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/schedule">Schedule</Nav.Link>
          <Nav.Link href="/sponsors">Sponsors</Nav.Link>
          <Nav.Link href="/speakers">Speakers</Nav.Link>
          <Nav.Link href="/about-us">About us</Nav.Link>
          <Nav.Link href="/job-offers">Job Offers</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </StyledNavBar>
)
