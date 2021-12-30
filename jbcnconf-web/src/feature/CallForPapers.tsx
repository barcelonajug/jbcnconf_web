import { FC, useState } from "react"
import { Badge, Button, Col, Container, Form, Row } from "react-bootstrap"
import styled from "styled-components"

const CfpSection = styled(Container)`
  background-color: #fff;
  color: black;
`

const CallForPapers: FC = () => {
  const [speakers, setSpeakers] = useState(0)
  const cfpLastDay = new Date(
    process.env.REACT_APP_CFP_END_DATE || new Date().toDateString()
  )
  const startDate = new Date(
    process.env.REACT_APP_CONF_START_DATE || new Date().toDateString()
  )
  const endDate = new Date(
    process.env.REACT_APP_CONF_END_DATE || new Date().toDateString()
  )

  return (
    <CfpSection fluid>
      <Row>
        <Col>
          <h1>SEND YOUR PAPER</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          Complete this form with your proposal to join as speaker to the next
          edition of the JBCNConf ({startDate.toLocaleDateString()} to{" "}
          {endDate.toLocaleDateString()}). Call for papers will end the{" "}
          <Badge>{cfpLastDay.toLocaleDateString()}</Badge> (last day) or as soon
          as the schedule is completed. The proposal will be reviewed for the
          org team and we will try to send you a reply with our feedback.
        </Col>
      </Row>
      <Row>
        <Col>
          <ul>
            <li>#JVM langs (Java, Kotlin, Scala, Clojure, Groovy...)</li>
            <li>#Mobile, #Android</li>
            <li>#Microservices, #Docker, #Kubernetes, #Istio</li>
            <li>#Agile, #cleancode, #design</li>
            <li>#Testing, #DDD, #TDD</li>
          </ul>
        </Col>
        <Col>
          <ul>
            <li>#Cloud, #AWS, #GCP, #Scalabilty</li>
            <li>#Cryptocurrencies, #BlockChain</li>
            <li>#Machine learning, #AI</li>
            <li>#CI, #CD, #Integration</li>
            <li>#IoT, #VR, #AR</li>
            <li>#Functional Programming</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          Each speaker may send more than one CFP.
          <p>
            <strong>
              Which elements from your paper can improve your rating?
            </strong>
          </p>
          <ul>
            <li>Cover main stream topics (see above)</li>
            <li>
              Focus on real life experiences rather than theoretical ("hello
              world")
            </li>
            <li>
              Show real (failed) experiences on using technologies or approaches
              and how you solved them
            </li>
          </ul>
          If you have questions or comments, please contact with us:
          info@barcelonajug.org
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="button">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </CfpSection>
  )
}

export default CallForPapers
