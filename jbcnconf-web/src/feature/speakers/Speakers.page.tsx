import { Card, Col, Container, Row } from "react-bootstrap"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { FC, useEffect, useState } from "react"
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { SpeakerProps, SpeakerType } from "./types"
import leftBg from "../../img/white-green-lt.jpg"
import rightBg from "../../img/white-green-bt.jpg"
import bottomBg from "../../img/green-white-wave.jpg"

const StyledContainer = styled(Container)`
   {
    background-color: #06d6a0;
    color: ghostwhite;
    background-image: url(${leftBg}), url(${rightBg}), url(${bottomBg});
    background-repeat: no-repeat, no-repeat, repeat-x;
    background-position: left 20px, right 20px, center bottom;
    background-size: 10%, 10%, contain;
    padding-bottom: 150px;
  }

  svg {
    max-height: 24px;
    color: ghostwhite;
  }

  svg:hover {
    transition: all 0.5s ease;
    color: tomato;
  }

  h2:before {
    content: "/";
    font-weight: bold;
    margin-left: 10px;
  }

  img {
    clip-path: inset(5% 5% 5% 5% round 2%);
    filter: grayscale(80%) contrast(120%) brightness(120%);
    transition: all 250ms ease-in-out;
  }

  img:hover {
    clip-path: inset(10% 10% 10% 10% round 5%);
    filter: grayscale(10%);
    transition: all 500ms ease-in-out;
    transform: scale(1.18);
    box-shadow: 10px 10px red;
  }

  .card {
    background-color: transparent;
    border: none;

    .card-body {
      padding: 0.2rem;
    }

    h3 a {
      color: ghostwhite;
      text-decoration: none;
    }

    h4 {
      color: #ee476f;
      font-size: 1rem;
    }
  }
`

const Speaker: FC<SpeakerProps> = (props: SpeakerProps) => {
  const { ref, name, lastname, image, description } = props.speaker
  return (
    <Card>
      <Card.Img variant="top" src={`https://www.jbcnconf.com/2022/${image}`} />
      <Card.Body>
        <h3>
          <Link to={`${ref}`}>
            {name} {lastname}
          </Link>
        </h3>
        <h4>{description}</h4>
      </Card.Body>
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
        <Col xs={{ offset: 1, span: 3 }}>
          <h2>Speakers</h2>
        </Col>
        <Col xs={6}>
          Speakers coming from all corners of the world join us to share their
          experience in various technologies and to invite everyone to
          participate in Open Source Technologies and in the JCP.
        </Col>
      </Row>
      .
      <Row>
        <Col>&nbsp;</Col>
      </Row>
      <Row>
        {data.map((speaker, idx) => (
          <Col xs={{ span: 3, offset: idx % 3 === 0 ? 1 : 0 }} key={idx}>
            <Speaker speaker={speaker} />
          </Col>
        ))}
      </Row>
    </StyledContainer>
  )
}

export default SpeakersPage
