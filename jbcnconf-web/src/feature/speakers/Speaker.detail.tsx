import { useParams } from "react-router-dom"
import { Col, Container, Row } from "react-bootstrap"
import { FC, useEffect, useState } from "react"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import { SpeakerType } from "./types"
import styled from "styled-components"
import { Home } from "@styled-icons/heroicons-solid/Home"
import { Linkedin, Twitter } from "@styled-icons/boxicons-logos"
import bg from "../../img/blue-green-bt.jpg"

const SpeakerContainer = styled(Container)`
   {
    background-image: url(${bg});
    background-color: var(--color-blue);
    background-repeat: no-repeat;
    background-position: right center;
    background-size: 20%;
  }

  h3 {
    color: var(--color-yellow);
  }

  svg {
    color: ghostwhite;
    max-height: 24px;
    max-width: 24px;
    transition: all 0.5s ease-in-out;

    &:hover {
      color: var(--color-yellow);
    }
  }

  img {
    padding: 3px;
    border: 1px solid var(--color-fucsia);
    transition: all 0.5s ease-in-out;

    &:hover {
      border: 1px solid var(--color-yellow);
    }
  }

  #social-links {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.5em;

    div {
      flex-grow: 1;
      text-align: center;
    }
  }
`

const SpeakerDetail: FC = () => {
  const { speakerId } = useParams()

  const db = getFirestore()
  const [data, setData] = useState<SpeakerType | null>(null)

  useEffect(() => {
    const getData = () => {
      getDoc(doc(db, "speakers", speakerId as string)).then(querySnapshot => {
        if (querySnapshot.exists()) {
          setData(querySnapshot.data() as SpeakerType)
        }
      })
    }
    getData()

    if (data) {
      document.title = `JBCNConf - Speakers ${data.name} ${data.lastname}`
    }
  }, [db, speakerId, data])

  return (
    <SpeakerContainer fluid>
      <Row>
        <Col>&nbsp;</Col>
      </Row>
      <Row>
        {data && (
          <>
            <Col xs={{ span: 3, offset: 1 }}>
              <img
                width="100%"
                src={`https://www.jbcnconf.com/2022/${data.image}`}
                alt={`${data.name} ${data.lastname}`}
              />
              <div id="social-links">
                {data.homepage && (
                  <div>
                    <a
                      href={data.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Home />
                    </a>
                  </div>
                )}
                {data.linkedin && (
                  <div>
                    <a
                      href={data.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin />
                    </a>
                  </div>
                )}
                {data.twitter && (
                  <div>
                    <a
                      href={data.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter />
                    </a>
                  </div>
                )}
              </div>
            </Col>
            <Col xs={7}>
              <h3>
                {data.name} {data.lastname}{" "}
              </h3>
              <h4>
                {data.description}, {data.company}
              </h4>
              <p>{data.biography}</p>
            </Col>
          </>
        )}
      </Row>
    </SpeakerContainer>
  )
}

export default SpeakerDetail
