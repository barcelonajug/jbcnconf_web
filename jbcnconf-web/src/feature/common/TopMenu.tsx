import { Container, Nav, Navbar } from "react-bootstrap"
import React, { FC, useEffect, useState } from "react"
import styled from "styled-components"
import { collection, getDocs, getFirestore } from "firebase/firestore"

const StyledNavBar = styled(Navbar)`
  .nav-link {
    text-align: center;
    font-family: "Monda", sans-serif;
    font-size: 2rem;
    color: var(--color-fucsia) !important;
  }

  .navbar-dark .navbar-nav .nav-link {
    color: var(--color-fucsia);
  }

  .navbar-toggler:focus {
    box-shadow: 0 0 0 0.25rem rgba(239, 71, 111, 0.5);
  }
`

interface LinkType {
  name: string
  url: string
  enabled: boolean
}

export const TopMenu: FC = () => {
  const db = getFirestore()
  const [data, setData] = useState<LinkType[]>([])

  useEffect(() => {
    const getData = () => {
      getDocs(collection(db, "links")).then(querySnapshot =>
        setData(querySnapshot.docs.map(doc => doc.data() as LinkType))
      )
    }
    getData()
  }, [db])

  return (
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
            {data.map(({ name, url, enabled }) => (
              <Nav.Link
                key={name}
                href={url}
                className={enabled ? "nav-link" : "nav-link disabled"}
              >
                {name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavBar>
  )
}
