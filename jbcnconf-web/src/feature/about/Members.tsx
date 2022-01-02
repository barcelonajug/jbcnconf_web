import { Card, Col, Container, Row } from "react-bootstrap"
import { Linkedin, Twitter } from "@styled-icons/boxicons-logos"
import styled from "styled-components"
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { Firestore } from "@firebase/firestore"
import { FC, useEffect, useState } from "react"
import leftBg from "../../img/white-blue-lt.jpg"
import rightBg from "../../img/white-blue-bt.jpg"

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
  @keyframes blurInOut {
    0% {
      filter: grayscale(50%) blur(0);
    }
    50% {
      filter: grayscale(25%) blur(4px);
    }
    100% {
      filter: grayscale(0) blur(0);
    }
  } {
  color: var(--color-blue);
  background-color: ghostwhite;
  background-image: url(${leftBg}), url(${rightBg});
  background-repeat: no-repeat, no-repeat;
  background-position: left 20px, right 20px;
  background-size: 10%, 10%;
}

  h3:before {
    content: "/";
    font-weight: bold;
    margin-left: 10px;
  }

  svg {
    max-height: 24px;
  }

  .card {
    background-color: transparent;
    border: none;

    .card-body {
      padding: 5px 0;
    }

    .card-subtitle {
      color: var(--color-fucsia);
    }

    .card-footer {
      background-color: transparent;
      border: none;
      display: flex;
      justify-content: center;

      small {
        flex-grow: 1;
        text-align: center;
      }
    }

    .card-text {
      font-size: 12px;
      padding-top: 10px;
    }

    .card-title {
      font-family: "Monda", cursive;
    }
  }

  img {
    filter: grayscale(30%);

    &:hover {
      filter: grayscale(0);
      animation-name: blurInOut;
      animation-duration: 250ms;
    }
  }

  .col:nth-child(2n) {
    .card {
      padding-top: 10px;
    }

    .card-title,
    .card-footer a {
      color: var(--color-green);
    }

    .card-subtitle {
      color: var(--color-blue);
    }
  }

  .col:nth-child(3n) {
    .card {
      padding-top: 20px;
    }

    .card-title,
    .card-footer a {
      color: #26547c;
    }

    .card-subtitle {
      color: var(--color-yellow);
    }
  }

  .col:nth-child(5n) {
    .card-title,
    .card-footer a {
      color: var(--color-fucsia);
    }

    .card-subtitle {
      color: var(--color-green);
    }
  }
`

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
