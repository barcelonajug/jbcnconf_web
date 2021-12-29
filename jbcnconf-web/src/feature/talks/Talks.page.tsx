import { Card, Col, Container, Row } from "react-bootstrap"
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { FC, useEffect, useState } from "react"

interface TalkType {
  id: string
  title: string
  abstract: string
  type: string
  tags: string[]
  level: string
  speakers: string[]
}

interface TalkProps {
  talk: TalkType
}

const Talk: FC<TalkProps> = (props: TalkProps) => (
  <Card bg="dark">
    <Card.Header>{props.talk.title}</Card.Header>
    <Card.Footer>{props.talk.tags.join(", ")}</Card.Footer>
  </Card>
)

const TalksPage: FC = () => {
  const db = getFirestore()
  const [data, setData] = useState<TalkType[]>([])

  useEffect(() => {
    document.title = "JBCNConf- Talks"
    const getData = () => {
      getDocs(collection(db, "talks")).then(querySnapshot =>
        setData(querySnapshot.docs.map(doc => doc.data() as TalkType))
      )
    }
    getData()
  }, [db])

  return (
    <Container>
      <Row>
        <Col>&nbsp;</Col>
      </Row>
      <Row>
        <Col>
          <h2>Talks</h2>
        </Col>
      </Row>
      <Row>
        {data.map((talk, index) => (
          <Col key={index}>
            <Talk talk={talk} />
          </Col>
        ))}
      </Row>
      <Row>
        <Col>&nbsp;</Col>
      </Row>
    </Container>
  )
}

export default TalksPage
