import Count from "react-countdown"
import { Col, Container, Row } from "react-bootstrap"
import styled from "styled-components"

const StyledCounter = styled(Col)`
  border-radius: 35px;
  border: solid yellow 1px;
  text-align: center;
  color: white;
  padding: 5px 0;
  background: transparent;
`

const Completed = () => <span>Event is on!</span>

// @ts-ignore
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completed />
  } else {
    return (
      <Container>
        <Row>
          <StyledCounter xs={{ span: 1, offset: 4 }}>
            {days} <br /> Days
          </StyledCounter>
          <StyledCounter xs={1}>
            {hours} <br />
            Hours
          </StyledCounter>
          <StyledCounter xs={1}>
            {minutes} <br />
            Minutes
          </StyledCounter>
          <StyledCounter xs={1}>
            {seconds} <br />
            Seconds
          </StyledCounter>
        </Row>
      </Container>
    )
  }
}

const Countdown = () => {
  return <Count date={new Date(2022, 6, 19)} renderer={renderer} />
}

export default Countdown
