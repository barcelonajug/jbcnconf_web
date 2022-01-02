import { Card, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FC, useEffect, useState } from "react"
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { SpeakerProps, SpeakerType } from "./types"
import { StyledContainer } from "./styles"

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
