import { Col, Container, Row } from "react-bootstrap"
import styled from "styled-components"
import { PhotoPlaceholder } from "react-placeholder-image"

const StyledContainer = styled(Container)`
   {
    background-color: #ef476f;
    color: ghostwhite;
    padding: 50px 0;
  }

  h3 {
    font-family: "Roboto Slab", sans-serif;
    text-transform: uppercase;
  }

  button {
    background-color: #06d6a0;
    color: #ef476f;
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
