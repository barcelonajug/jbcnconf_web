import { Card, Col, Container, Row } from "react-bootstrap"
import { Linkedin, Twitter } from "@styled-icons/boxicons-logos"
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { Firestore } from "@firebase/firestore"
import { FC, useEffect, useState } from "react"
import { MemberProps, MemberType } from "./types"
import { StyledMembers } from "./styles"

const Member: FC<MemberProps> = (props: MemberProps) => {
  const { image, lastname, linkedin, name, position, twitter } = props.member
  return (
    <Card>
      <Card.Img
        variant="top"
        alt={`${name} ${lastname}`}
        src={`https://www.jbcnconf.com/2022${image}`}
      />
      <Card.Body>
        <Card.Title>{`${name} ${lastname}`}</Card.Title>
        <Card.Subtitle>{position}</Card.Subtitle>
      </Card.Body>
      <Card.Footer>
        {linkedin && (
          <small>
            <a href={linkedin}>
              <Linkedin />
            </a>
          </small>
        )}
        {twitter && (
          <small>
            <a href={twitter}>
              <Twitter />
            </a>
          </small>
        )}
      </Card.Footer>
    </Card>
  )
}

const Members: FC = () => {
  const db: Firestore = getFirestore()

  const [data, setData] = useState<MemberType[]>([])

  useEffect(() => {
    const getData = () => {
      getDocs(collection(db, "members")).then(querySnapshot =>
        setData(querySnapshot.docs.map(doc => doc.data() as MemberType))
      )
    }
    getData()
  }, [db])

  return (
    <StyledMembers fluid>
      <Row>
        <Col>&nbsp;</Col>
      </Row>
      <Row>
        <Col xs={{ offset: 1, span: 4 }}>
          <h3>ABOUT US</h3>
        </Col>
        <Col xs={6}>
          <p>
            The Barcelona Java User Group is a non profit association with a
            great team and a broad experience in Java technologies. Since 2012,
            we are organizing talks and meetups focused on <strong>Java</strong>{" "}
            topics, looking forward to spin this technology from our hometown to
            the rest of the world.
          </p>
        </Col>
      </Row>
      <Container>
        <Row>
          <Col xs={{ offset: 1, span: 10 }}>
            <Row xs={3}>
              {data.map((member, index) => (
                <Col key={index}>
                  <Member member={member} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      <Row>
        <Col>&nbsp;</Col>
      </Row>
    </StyledMembers>
  )
}

export default Members
