import { useParams } from "react-router-dom"
import { Col, Row } from "react-bootstrap"
import { FC, useEffect, useState } from "react"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import { SpeakerType } from "./types"
import styled from "styled-components"

const Small = styled.small`
  font-size: 0.8em;
  color: antiquewhite;
`

const SpeakerDetail: FC = () => {
  const { speakerId } = useParams()

  const db = getFirestore()
  const [data, setData] = useState<SpeakerType | null>(null)

  useEffect(() => {
    document.title = "JBCNConf - Speakers"
    const getData = () => {
      getDoc(doc(db, "speakers", speakerId as string)).then(querySnapshot => {
        if (querySnapshot.exists()) {
          setData(querySnapshot.data() as SpeakerType)
        }
      })
    }
    getData()
  }, [db])

  return (
    <Row>
      {data && (
        <Col xs={{ offset: 2, span: 8 }}>
          <h3>
            {data.name} {data.lastname}{" "}
            <Small>
              {data.description}, {data.company}
            </Small>
          </h3>
          <p>{data.biography}</p>
        </Col>
      )}
    </Row>
  )
}

export default SpeakerDetail
