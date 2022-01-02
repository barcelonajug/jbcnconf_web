import { Col, Container, Row } from "react-bootstrap"
import styled from "styled-components"
import { PhotoPlaceholder } from "react-placeholder-image"
import leftBg from "../img/left-lt.jpg"
import rightBg from "../img/right-gt.jpg"

const StyledContainer = styled(Container)`
   {
    background-color: var(--color-fucsia);
    background-image: url(${leftBg}), url(${rightBg});
    background-size: 10%, 10%;
    background-position: right 70%, left 50px;
    background-repeat: no-repeat, no-repeat;
    color: ghostwhite;
    padding: 50px 0;
  }

  h3 {
    font-family: "Roboto Slab", sans-serif;
    text-transform: uppercase;
  }

  button {
    background-color: var(--color-green);
    color: var(--color-fucsia);
  }
`

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "What is the JAVA & JVM Barcelona Tech Conference?",
      photo: "",
      description: "iorem ipsum dolor sit amet, consectetur adip",
    },
    {
      id: 2,
      title: "Why should I participate",
      photo: "",
      description: "iorem ipsum dolor sit amet, consectetur adip",
    },
    {
      id: 3,
      title: "What are we celebrating this year?",
      photo: "",
      description: "iorem ipsum dolor sit amet, consectetur adip",
    },
  ]

  return (
    <StyledContainer fluid>
      <Container>
        {articles.map((article, index) => (
          <Row key={index}>
            <Col xs={{ span: 4, order: index % 2 }}>
              <PhotoPlaceholder width={200} height={200} />
            </Col>
            <Col>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <button>Read more</button>
            </Col>
          </Row>
        ))}
      </Container>
    </StyledContainer>
  )
}

export default Articles
