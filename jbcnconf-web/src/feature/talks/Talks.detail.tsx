import { useParams } from "react-router-dom"
import { Badge, Col, Row } from "react-bootstrap"
import YouTube from "react-youtube"
import { FC } from "react"
import { Linkedin, Twitter } from "@styled-icons/fa-brands"
import { HomeCircle } from "@styled-icons/boxicons-solid"
import { TalkDetailType } from "./types"
import { colors, SpeakerContainer, TalkContainer } from "./styles"

const TalksDetail: FC = () => {

  const data: TalkDetailType = {
    title: "replicating production on your laptop using the magic of containers",
    youtube: "lQWQz3ftazo",
    tags: [
      "Testing", "Java", "Testcontainers", "MicroShield", "testing", "Containers", "Cloud", "Cloud-native"
    ],
    speaker: {
      name: "Grace Jensen",
      role: "Developer Advocate",
      image: "grace-jensen.jpg",
      biography: "Grace is a Developer Advocate at IBM, working with Open Liberty and Reactive Technologies. She has\n" +
        "been with IBM since graduating from Exeter University with a Degree in Biology. Grace enjoys bringing\n" +
        "a varied perspective to her projects and using her knowledge of biological systems to simplify\n" +
        "complex software patterns and architectures. As a developer advocate, Grace builds POC’s, demos\n" +
        "and sample applications, and writes guides and tutorials. She is a regular presenter at international\n" +
        "technology conferences and has recently authored a book on reactive systems. Grace also has a\n" +
        "keen passion for encouraging more women into STEM and especially Technology careers.",
      linkedin: "https://linkedin.com/in/grace-jensen",
      twitter: "https://twitter.com/grace-jensen",
      web: "https://grace-jensen.com"
    },
    abstract: "Containers are an amazing technology that are revolutionising how we deploy and create\n" +
      "applications. Docker and Kubernetes are helping developers and organisations realise\n" +
      "the magical potential that container technology and orchestration offer. Enter\n" +
      "MicroShed and the Testcontainers framework enabling local test automation that\n" +
      "leverages that magical portability containers offer. In this session we'll explore how\n" +
      "Testcontainers can help you run and test with true-to-production environments in\n" +
      "development with minimal re-writing of your test code."
  }

  const { id } = useParams()

  return (<>
      <TalkContainer fluid>
        <Row>
          <Col xs={{ offset: 2, span: 8 }}>
            <h1>{data.title}</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={{ offset: 2, span: 8 }}>
            <p className="abstract">{data.abstract}</p>
          </Col>
        </Row>
        <Row><Col xs={{ offset: 2, span: 8 }}>
          <YouTube
            videoId={data.youtube}
          />
        </Col></Row>
        <Row><Col xs={{ offset: 2, span: 8 }}>
          {data.tags.map((tag, index) => <Badge bg={colors[index]} key={tag}>{tag}</Badge>)}
        </Col></Row>
      </TalkContainer>
      <SpeakerContainer fluid>
        <Row>
          <Col xs={{ offset: 2, span: 2 }}>
            <img src={`https://www.jbcnconf.com/2021/assets/img/speakers/${data.speaker.image}`}
                 alt={data.speaker.name} width="100%" />
            <div className="social-icons">
              <a target="_blank" rel="noopener noreferrer" href={data.speaker.linkedin}><Linkedin /></a>
              <a target="_blank" rel="noopener noreferrer" href={data.speaker.twitter}><Twitter /></a>
              <a target="_blank" rel="noopener noreferrer" href={data.speaker.web}><HomeCircle /></a>
            </div>
          </Col>
          <Col xs={{ span: 6 }}>
            <h2>
              {data.speaker.name}
            </h2>
            <h3>{data.speaker.role}</h3>
            <p>{data.speaker.biography}</p>
          </Col>
        </Row>
        <Row><Col>&nbsp;</Col></Row>
      </SpeakerContainer>
    </>
  )
}
export default TalksDetail
