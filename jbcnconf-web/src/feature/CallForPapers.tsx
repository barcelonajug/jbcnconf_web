import { FC, SyntheticEvent, useEffect, useState } from "react"
import { Badge, Button, Col, Container, Form, Row, Tab, Tabs } from "react-bootstrap"
import styled from "styled-components"

const CfpSection = styled(Container)`
  background-color: #fff;
  color: black;
`

const CallForPapers: FC = () => {
  const [speakersCount, setSpeakersCount] = useState<number>(2)
  const [validated, setValidated] = useState<boolean>(false)
  //<editor-fold desc="dates">
  const cfpLastDay = new Date(
    process.env.REACT_APP_CFP_END_DATE || new Date().toDateString()
  )
  const startDate = new Date(
    process.env.REACT_APP_CONF_START_DATE || new Date().toDateString()
  )
  const endDate = new Date(
    process.env.REACT_APP_CONF_END_DATE || new Date().toDateString()
  )
  //</editor-fold>

  useEffect(() => {
    document.title = "JBCNConf - Call for Papers"
  }, [])

  const increaseSpeakersCount = () => {
    if (speakersCount <= 5) {
      setSpeakersCount(speakersCount + 1)
    }
  }

  const decreaseSpeakersCount = () => {
    if (speakersCount > 1) {
      setSpeakersCount(speakersCount - 1)
    }
  }

  const handleSubmit = (event: SyntheticEvent) => {
    console.clear()
    const formData = new FormData(event.target as HTMLFormElement)
    console.log()
    const formProps = Object.fromEntries(formData)
    console.log(formData.getAll("fullName"))
    setValidated(true)
    event.preventDefault()
    event.stopPropagation()
    console.log("form data", formProps)
  }

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
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <input type="hidden" name="edition" value="2022" />
            <Form.Group className="mb-3" controlId="languages">
              <Form.Label>Languages available:*</Form.Label>
              <Form.Text as="p">Let us know in which of the following you could share the
                session.</Form.Text>
              <Form.Check name="languages" value="eng" type="checkbox" label="English" inline defaultChecked />
              <Form.Check name="languages" value="spa" type="checkbox" label="Spanish" inline />
            </Form.Group>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title *</Form.Label>
              <Form.Control name="title" type="text" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="level">
              <Form.Label>Level *</Form.Label>
              <Form.Select name="level" required>
                <option value="Beginner">Beginner</option>
                <option value="Middle">Middle</option>
                <option value="Advanced">Advanced</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Abstract">
              <Form.Label>Abstract* </Form.Label>
              <Form.Control name="abstract" as="textarea" rows={5} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="tags">
              <Form.Label>Tags *(at least 2 separated by comma)</Form.Label>
              <Form.Control name="tags" type="text" placeholder="Java, Android, Kotlin, AWS, Kubernetes" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="comments">
              <Form.Label>Comments </Form.Label>
              <Form.Control name="comments" as="textarea" rows={2} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="speakerCount">
              <Form.Text><h3>Speakers</h3></Form.Text>
              <Button variant="outline-secondary" size="sm" onClick={increaseSpeakersCount}>+</Button>
              <Button variant="outline-secondary" size="sm" onClick={decreaseSpeakersCount}>-</Button>
            </Form.Group>
            <Tabs defaultActiveKey="Speaker 1">
              {Array.from(Array(2).keys()).map((index: any, i: any) => <Tab eventKey={index} key={i}
                                                                            title={`Speaker ${index + 1}`}>
                <h5>Speaker {index + 1}</h5>
                <Form.Group
                  className="mb-3" controlId="speakerName">
                  <Form.Label>Full name *</Form.Label>
                  <Form.Control name="fullName" type="text" placeholder="Firstname Lastname" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="speakerEmail">
                  <Form.Label>Email *</Form.Label>
                  <Form.Control name="email" type="email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="speakerJobDescription">
                  <Form.Label>Job description*</Form.Label>
                  <Form.Control name="jobTitle" type="text" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="speakerCompany">
                  <Form.Label>Company *</Form.Label>
                  <Form.Control name="company" type="text" placeholder="Company name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="speakerLinkedIn">
                  <Form.Label>LinkedIn </Form.Label>
                  <Form.Control name="linkedin" type="text" placeholder="https://www.linkedin.com/in/..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="speakerTwitter">
                  <Form.Label>Twitter </Form.Label>
                  <Form.Control name="twitter" type="text" placeholder="https://twitter.com/..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="speakerWeb">
                  <Form.Label>Web </Form.Label>
                  <Form.Control name="web" type="text" placeholder="https://my.web.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="biography">
                  <Form.Label>Biography *</Form.Label>
                  <Form.Control name="biography" as="textarea" rows={5} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="speakerPhoto">
                  <Form.Label>Picture (URL) *</Form.Label>
                  <Form.Control name="picture" type="text" placeholder="https://my.photo.com" required />
                  <Form.Text className="text-muted">
                    Please, ensure that the image is 512 x 512 and available as public http resource. This will help us
                    a
                    lot and avoid any manipulation from our side.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="conditions">
                  <Form.Check type="checkbox" required>
                    <Form.Check.Input type="checkbox" required />
                    <Form.Check.Label>I have read and agree with the <a
                      href="https://www.jbcnconf.com/2022/conditions.html">conditions
                      and data policies.</a></Form.Check.Label>
                  </Form.Check>
                </Form.Group>
              </Tab>)}
            </Tabs>


            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </CfpSection>
  )
}

export default CallForPapers
