import { Card, CardGroup, Col, Container, Row } from "react-bootstrap"
import { Linkedin, Twitter } from "@styled-icons/boxicons-logos"
import styled from "styled-components"
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { Firestore } from "@firebase/firestore"
import { FC, useEffect, useState } from "react"

interface MemberType {
  name: string
  lastname: string
  position: string
  bio: string
  role: string
  image: string
  linkedin?: string
  twitter?: string
}

interface MemberProps {
  member: MemberType
}

const StyledMembers = styled(Container)`
   {
    background-color: #0496ff;
    color: ghostwhite;
  }

  svg {
    max-height: 24px;
  }

  .card-body {
    background-color: #0496ff;
    color: ghostwhite;
  }

  img:hover {
    filter: grayscale(50);
    transition: all 250ms ease-in-out;
  }

  .card-text {
    font-size: 12px;
    padding-top: 10px;
  }

  .card-title {
    font-family: "Marck Script", cursive;
  }
`

const Member: FC<MemberProps> = (props: MemberProps) => {
  const { bio, image, lastname, linkedin, name, position, twitter } =
    props.member
  return (
    <Card bg="dark">
      <Card.Img
        variant="top"
        alt={`${name} ${lastname}`}
        src={`https://www.jbcnconf.com/2022${image}`}
      />
      <Card.Body>
        <Card.Title>{`${name} ${lastname}`}</Card.Title>
        <Card.Subtitle>{position}</Card.Subtitle>
        <Card.Text>{bio}</Card.Text>
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
        <Col xs={{ offset: 1, span: 10 }}>
          <h3>Members</h3>
          <p>
            The Barcelona Java User Group is a non profit association with a
            great team and a broad experience in Java technologies. Since 2012,
            we are organizing talks and meetups focused on <strong>Java</strong>{" "}
            topics, looking forward to spin this technology from our hometown to
            the rest of the world.
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={{ offset: 1, span: 10 }}>
          <CardGroup>
            {data.map((member, index) => (
              <Member key={index} member={member} />
            ))}
          </CardGroup>
        </Col>
      </Row>
      <Row>
        <Col>&nbsp;</Col>
      </Row>
    </StyledMembers>
  )
}

export default Members
