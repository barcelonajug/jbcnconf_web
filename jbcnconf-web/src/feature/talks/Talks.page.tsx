import { Badge, Button, Col, Row } from "react-bootstrap"
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { FC, useEffect, useState } from "react"
import { colors, SpeakersPageContainer, TalksContainer } from "./styles"
import { TalkProps, TalkType } from "./types"

const imageUrl = "https://www.jbcnconf.com/2021/assets/img/speakers/grace-jensen.jpg"

const Talk: FC<TalkProps> = (props: TalkProps) => (<>
  <Col xs={{ span: 2, order: props.index % 2 === 0 ? 0 : 1 }}>
    <img src={imageUrl} alt={props.talk.title} width="100%" />
  </Col>
  <Col>
    <h2>{props.talk.title}</h2>
    <p>{props.talk.level}</p>
    <p>{props.talk.speakers.map((speaker) => <span>{speaker.name}</span>)}</p>
    <p>{props.talk.tags.map((tag, index) => <Badge bg={colors[index]}>{tag}</Badge>)}</p>
    <Button href={`/talk/${props.talk.id}`} size="sm">Watch</Button>
  </Col>
</>)

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

  return (<div className="yellow-bg">
    <SpeakersPageContainer fluid>
      <Row>
        <Col>&nbsp;</Col>
      </Row>
      <Row>
        <Col xs={{ offset: 2, span: 2 }}>
          <h1>Talks</h1>
        </Col>
        <Col xs={{ offset: 1, span: 5 }} className="description">Speakers coming from all corners of the world join us
          to
          share their experience in various technologies and to
          invite everyone to participate in Open Source
          Technologies and in the JCP</Col>
      </Row>
      <Row>
        <Col>&nbsp;</Col>
      </Row>
    </SpeakersPageContainer>
    <TalksContainer>
      {data.map((talk, index) => (
        <Row key={index}>
          <Talk talk={talk} index={index} />
        </Row>
      ))}
    </TalksContainer>
  </div>)
}

export default TalksPage
