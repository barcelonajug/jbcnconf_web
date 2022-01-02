import { FC } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { ScheduleDate } from "./types"

const SchedulePage: FC = () => {
  const data: ScheduleDate[] = [
    {
      date: "17-7-2022",
      slots: [
        {
          id: 1,
          start: "9:00",
          end: "9:40",
          talks: [
            {
              id: 1,
              title: "Youn don't need Kubernetes",
              speaker: ["Alex Soto"],
              description: "iorem ipsum dolor sit amet",
              room: "One",
            },
            {
              id: 2,
              title: "You don't need Kubernetes",
              speaker: ["Alex Soto"],
              description: "iorem ipsum dolor sit amet",
              room: "One",
            },
            {
              id: 3,
              title: "You don't need Kubernetes",
              speaker: ["Alex Soto"],
              description: "iorem ipsum dolor sit amet",
              room: "One",
            },
            {
              id: 4,
              title: "You don't need Kubernetes",
              speaker: ["Alex Soto"],
              description: "iorem ipsum dolor sit amet",
              room: "One",
            },
            {
              id: 5,
              title: "You don't need Kubernetes",
              speaker: ["Alex Soto"],
              description: "iorem ipsum dolor sit amet",
              room: "One",
            },
          ],
        },
        {
          id: 2,
          start: "9:00",
          end: "9:40",
          talks: [
            {
              id: 1,
              title: "Youn don't need Kubernetes",
              speaker: ["Alex Soto"],
              description: "iorem ipsum dolor sit amet",
              room: "One",
            },
            {
              id: 2,
              title: "You don't need Kubernetes",
              speaker: ["Alex Soto"],
              description: "iorem ipsum dolor sit amet",
              room: "One",
            },
            {
              id: 3,
              title: "You don't need Kubernetes",
              speaker: ["Alex Soto"],
              description: "iorem ipsum dolor sit amet",
              room: "One",
            },
            {
              id: 4,
              title: "You don't need Kubernetes",
              speaker: ["Alex Soto"],
              description: "iorem ipsum dolor sit amet",
              room: "One",
            },
            {
              id: 5,
              title: "You don't need Kubernetes",
              speaker: ["Alex Soto"],
              description: "iorem ipsum dolor sit amet",
              room: "One",
            },
          ],
        },
      ],
    },
    {
      date: "18-7-2022",
      slots: [
        {
          id: 1,
          start: "9:00",
          end: "9:40",
          talks: [
            {
              id: 1,
              title: "Youn don't need Kubernetes",
              speaker: ["Alex Soto"],
              description: "iorem ipsum dolor sit amet",
              room: "One",
            },
            {
              id: 2,
              title: "You don't need Kubernetes",
              speaker: ["Alex Soto"],
              description: "iorem ipsum dolor sit amet",
              room: "One",
            },
            {
              id: 3,
              title: "You don't need Kubernetes",
              speaker: ["Alex Soto"],
              description: "iorem ipsum dolor sit amet",
              room: "One",
            },
            {
              id: 4,
              title: "You don't need Kubernetes",
              speaker: ["Alex Soto"],
              description: "iorem ipsum dolor sit amet",
              room: "One",
            },
            {
              id: 5,
              title: "You don't need Kubernetes",
              speaker: ["Alex Soto"],
              description: "iorem ipsum dolor sit amet",
              room: "One",
            },
          ],
        },
      ],
    },
    {
      date: "19-7-2022",
      slots: [
        {
          id: 1,
          start: "9:00",
          end: "9:40",
          talks: [
            {
              id: 1,
              title: "Youn don't need Kubernetes",
              speaker: ["Alex Soto"],
              description: "iorem ipsum dolor sit amet",
              room: "One",
            },
            {
              id: 2,
              title: "You don't need Kubernetes",
              speaker: ["Alex Soto"],
              description: "iorem ipsum dolor sit amet",
              room: "One",
            },
            {
              id: 3,
              title: "You don't need Kubernetes",
              speaker: ["Alex Soto"],
              description: "iorem ipsum dolor sit amet",
              room: "One",
            },
            {
              id: 4,
              title: "You don't need Kubernetes",
              speaker: ["Alex Soto"],
              description: "iorem ipsum dolor sit amet",
              room: "One",
            },
            {
              id: 5,
              title: "You don't need Kubernetes",
              speaker: ["Alex Soto"],
              description: "iorem ipsum dolor sit amet",
              room: "One",
            },
          ],
        },
      ],
    },
  ]

  return (
    <Container>
      <Row key="first">
        <Col>&nbsp;</Col>
      </Row>
      <Row key="0">
        <Col>
          <h1>Schedule</h1>
        </Col>
      </Row>
      {data.map((day, idx) => (
        <Row key={idx} id={`${day.date}`}>
          <h4>{day.date}</h4>
          <Col>
            {day.slots.map(slot => (
              <Row key={slot.id}>
                <Col xs={1}>
                  <h5>
                    {slot.start} - {slot.end}
                  </h5>
                </Col>
                {slot.talks.map(talk => (
                  <Col key={talk.id}>
                    <Card bg="dark">
                      <Card.Body>
                        <Card.Title>{talk.title}</Card.Title>
                        <Card.Text key={talk.id}>
                          <p>{talk.description}</p>
                          <p>{talk.room}</p>
                          <p>{talk.speaker.join(", ")}</p>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            ))}
          </Col>
        </Row>
      ))}
      <Row key="last">
        <Col>&nbsp;</Col>
      </Row>
    </Container>
  )
}
export default SchedulePage
