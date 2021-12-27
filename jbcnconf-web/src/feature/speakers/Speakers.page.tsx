import { Card, Col, Container, Row } from "react-bootstrap"
import styled from "styled-components"
import { Linkedin, Twitter } from "@styled-icons/boxicons-logos"
import { Home } from "@styled-icons/heroicons-solid/Home"
import { Link, Outlet } from "react-router-dom"
import { FC, useEffect, useState } from "react"
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { SpeakerProps, SpeakerType } from "./types"

const StyledContainer = styled(Container)`
  background-color: #06d6a0;
  color: ghostwhite;

  svg {
    max-height: 24px;
    color: ghostwhite;
  }

  svg:hover {
    transition: all 0.5s ease;
    color: tomato;
  }

  img {
    clip-path: inset(5% 5% 5% 5% round 2%);
    filter: grayscale(80%) contrast(120%) brightness(120%);
    transition: all 100ms ease-in-out;
  }

  img:hover {
    clip-path: inset(10% 10% 10% 10% round 10%);
    filter: grayscale(10%);
    transition: all 250ms ease-in-out;
    transform: scale(1.18);
    box-shadow: 10px 10px red;
  }

  .card-header a {
    text-decoration: none;
    color: ghostwhite;
    font-family: "Kaushan Script", cursive;
    font-size: 1.2em;
  }

  .card-title {
    font-family: "Marck Script", cursive;
    font-size: 1.1em;
  }

  .card-footer {
    display: flex;
    justify-content: space-around;

    div {
      display: block;
      min-width: 24px;
    }
  }
`

const Speaker: FC<SpeakerProps> = (props: SpeakerProps) => {
  const {
    ref,
    twitter,
    linkedin,
    homepage,
    name,
    lastname,
    image,
    description,
  } = props.speaker
  return (
    <Card bg="success">
      <Card.Header>
        <Link to={`${ref}`}>
          {name} {lastname}
        </Link>
      </Card.Header>
      <Card.Img variant="top" src={`https://www.jbcnconf.com/2022/${image}`} />
      <Card.Body>
        <Card.Title>{description}</Card.Title>
      </Card.Body>
      {(homepage || twitter || linkedin) && (
        <Card.Footer>
          {homepage && (
            <div>
              <a href={homepage} target="_blank" rel="noopener noreferrer">
                <Home />
              </a>
            </div>
          )}
          {linkedin && (
            <div>
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin />
              </a>
            </div>
          )}
          {twitter && (
            <div>
              <a href={twitter} target="_blank" rel="noopener noreferrer">
                <Twitter />
              </a>
            </div>
          )}
        </Card.Footer>
      )}
    </Card>
  )
}

const SpeakersPage: FC = () => {
  const db = getFirestore()
  const [data, setData] = useState<SpeakerType[]>([])

  useEffect(() => {
    document.title = "JBCNConf - Speakers"
    const getData = () => {
      getDocs(collection(db, "speakers")).then(querySnapshot =>
        setData(querySnapshot.docs.map(doc => doc.data() as SpeakerType))
      )
    }
    getData()
  }, [db])

  return (
    <StyledContainer fluid>
      <Row>
        <Col>&nbsp;</Col>
      </Row>
      <Row>
        <Col xs={{ offset: 1, span: 10 }}>
          <h2>Speakers</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Outlet />
        </Col>
      </Row>
      <Row>
        {data.map((speaker, idx) => (
          <Col key={idx}>
            <Speaker speaker={speaker} />
          </Col>
        ))}
      </Row>
    </StyledContainer>
  )
}

export default SpeakersPage
