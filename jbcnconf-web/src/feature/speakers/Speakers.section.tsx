import { Col, Container, Row } from "react-bootstrap"
import { PhotoPlaceholder } from "react-placeholder-image"
import { StyledSpeakerSection } from "./styles"

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
      name: "Speaker 5"
    },
    {
      id: 1,
      photo: "",
      name: "Speaker 6"
    }
  ]

  return <StyledSpeakerSection fluid>
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
      {speakers.map((speaker, index) => <Col xs={2} key={index}>
        <PhotoPlaceholder
          width={index % 2 ? 100 : 200}
          height={index % 2 ? 200 : 100}
        />
        <p className="speaker-name">{speaker.name}</p>
      </Col>)}
    </Row>
    <Container>
      <Row>
        <Col>
          <div className="all-speakers">View all speakers &gt;</div>
        </Col>
      </Row>
    </Container>
  </StyledSpeakerSection>
}

export default SpeakersSection
