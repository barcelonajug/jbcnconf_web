import { Col, Container, Row } from "react-bootstrap"
import {
  Blogger,
  FacebookCircle,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "@styled-icons/boxicons-logos"
import { Meetup } from "@styled-icons/fa-brands/Meetup"
import { Email } from "@styled-icons/evaicons-solid/Email"
import Logo from "../../img/logo-jbcnconf.jpg"
import bg from "../../img/footer-bg.jpg"
import styled from "styled-components"

const AppFooter = styled.footer`
   {
    background-color: #06d6a0;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-position: 1% bottom;
    background-size: 12%;
    padding-top: 20px;
    color: ghostwhite;
    font-size: 12px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Roboto Slab", sans-serif;
    color: ghostwhite;
  }

  .social-icons {
    display: flex;
    justify-content: space-around;

    a {
      display: block;
      min-width: 24px;
    }
  }

  a {
    color: ghostwhite;
    text-decoration: none;

    &:hover {
      transition: all 0.5s ease-in-out;
      color: tomato;
    }

    svg {
      max-height: 24px;
    }
  }
`

const year = new Date().getFullYear()

const Footer = () => (
  <AppFooter>
    <Container fluid>
      <Row>
        <Col xs={{ span: 2, offset: 2 }}>
          <div className="social-icons">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com"
            >
              <Twitter />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://youtube.com"
            >
              <Youtube />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://facebook.com"
            >
              <FacebookCircle />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com"
            >
              <Github />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://instagram.com"
            >
              <Instagram />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://linkedin.com"
            >
              <Linkedin />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://blogger.com"
            >
              <Blogger />
            </a>
          </div>
          <p>
            <a href="mailto:info@barcelonajug.org">
              <Email /> info@barcelonajug.org
            </a>
          </p>
        </Col>
        <Col xs={4} style={{ textAlign: "center" }}>
          <img src={Logo} alt="Jbcnconf" />
          <br />
          <br />
          <br />
          <br />
          <p>© {year} Barcelona JUG. All Rights Reserved.</p>
        </Col>
        <Col xs={{ span: 3, offset: 0 }}>
          <h5>Events</h5>
          <p>
            <a
              href="https://meetup.com/barcelonaJug"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Meetup /> Meetup
            </a>
          </p>
          <p>
            <a
              href="https://www.barcelonajug.org"
              rel="noopener noreferrer"
              target="_blank"
            >
              https://www.barcelonajug.org/
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  </AppFooter>
)

export default Footer
