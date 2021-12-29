import { Col, Container, Row } from "react-bootstrap"
import styled from "styled-components"
import { PhotoPlaceholder } from "react-placeholder-image"
import background from "../../img/green-background.jpg"

const StyledContainer = styled(Container)`
   {
    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: top right;
    background-color: #06d6a0;
    padding-top: 45px;
    color: ghostwhite;
    font-size: 12px;
  }

  .text {
    text-align: right;
  }

  .speaker-name {
    background-color: #ef476f;
    color: ghostwhite;
    text-align: center;
  }

  .all-speakers {
    font-family: "Roboto slab", sans-serif;
    text-align: right;
    color: #ef476f;
    font-size: 18px;
    font-weight: bold;
  }
`

const SpeakersSection = () => {
  const speakers = [
    {
      id: 1,
      photo: "",
      name: "Speaker 1",
    },
    {
      id: 1,
      photo: "",
      name: "Speaker 2",
    },
    {
      id: 1,
      photo: "",
      name: "Speaker 3",
    },
    {
      id: 1,
      photo: "",
      name: "Speaker 4",
    },
    {
      id: 1,
      photo: "",
      name: "Speaker 5",
    },
    {
      id: 1,
      photo: "",
      name: "Speaker 6",
    },
  ]

  return (
    <StyledContainer fluid>
      <Container>
        <Row>
          <Col>
            <h1>/ SPEAKERS</h1>
          </Col>
          <Col xs={{ span: 7, offset: 1 }}>
            <div className="text">
              <p>
                Speakers coming from all corners of the world join us to share
                their experience in various technologies and to invite everyone
                to participate in Open Source Technologies and in the JCP..
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Row>
        {speakers.map((speaker, index) => (
          <Col xs={2} key={index}>
            <PhotoPlaceholder
              width={index % 2 ? 100 : 200}
              height={index % 2 ? 200 : 100}
            />
            <p className="speaker-name">{speaker.name}</p>
          </Col>
        ))}
      </Row>
      <Container>
        <Row>
          <Col>
            <div className="all-speakers">View all speakers &gt;</div>
          </Col>
        </Row>
      </Container>
    </StyledContainer>
  )
}

export default SpeakersSection
