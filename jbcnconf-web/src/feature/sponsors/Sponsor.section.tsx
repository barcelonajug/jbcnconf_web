import { Col, Container, Row } from "react-bootstrap"
import styled from "styled-components"
import LeftBg from "../../img/white-red-lt.jpg"
import rightBg from "../../img/white-red-bt.jpg"

const StyledContainer = styled(Container)`
   {
    background-color: #fffcf9;
    padding-top: 50px;
    padding-bottom: 50px;
    background-image: url(${LeftBg}), url(${rightBg});
    background-position: left 10%, right 10%;
    background-repeat: no-repeat, no-repeat;
  }

  h1,
  h2,
  h3 {
    color: #ef476f;
    text-transform: uppercase;
    font-family: "Roboto Slab", sans-serif;
    font-weight: bold;
  }

  p {
    color: #ef476f;
    font-family: "Roboto Slab", sans-serif;
  }

  .title-top {
    color: #0496ff;
  }

  .title-regular {
    color: #ef476f;
  }

  .title-startup {
    color: #ffd166;
  }

  .title-supporter {
    color: #06d6a0;
  }
`

const TitleColumn = styled(Col)`
   {
    padding-top: 100px;
    padding-bottom: 50px;
  }
`

const StyledImage = styled.img`
  max-width: 80%;
  max-height: 80%;
  vertical-align: middle;
  line-height: 75px;
`

const Column = styled(Col)`
  text-align: center;
`

interface SponsorType {
  index: number
  type: string
  text: string
  sponsors: any[]
}

const SponsorDetails = (props: SponsorType) => {
  const size = (text: string) => {
    switch (text) {
      case "top":
        return 12
      case "premium":
        return 6
      case "regular":
        return 4
      default:
        return 2
    }
  }

  return (
    <Container fluid>
      <Row>
        <TitleColumn xs={{ offset: 2, order: props.index % 2 }}>
          <h3 className={props.type}>{props.text.toUpperCase()}</h3>
        </TitleColumn>
        <Col>
          <span className={props.type}>&nbsp;</span>
        </Col>
      </Row>
      <Row>
        {props.sponsors.map((sponsor, index) => (
          <Column xs={size(props.text)} key={index}>
            <a href={sponsor.href}>
              <StyledImage
                src={`https://www.jbcnconf.com/2020/${sponsor.image.src}`}
                alt={sponsor.image.alt}
              />
            </a>
          </Column>
        ))}
      </Row>
    </Container>
  )
}

const SponsorSection = () => {
  const data = {
    top: [
      {
        name: "Red Hat",
        href: "https://developers.redhat.com/",
        image: {
          src: "/assets/img/sponsors/redhat_rgb.png",
          alt: "Red Hat",
        },
      },
    ],
    premium: [
      {
        name: "Ocado Technology",
        href: "https://www.ocadotechnology.com",
        image: {
          src: "/assets/img/sponsors/ocadotechnology-200px-h.png",
          alt: "Ocado Technology",
        },
      },
      {
        name: "Adevinta Spain",
        href: "https://www.adevinta.es",
        image: {
          src: "/assets/img/sponsors/adevinta.png",
          alt: "Adevinta Spain",
        },
      },
    ],
    regular: [
      {
        name: "Capitole Consulting",
        href: "https://capitole-consulting.com/about/",
        image: {
          src: "/assets/img/sponsors/capitole.png",
          alt: "Capitole Consulting",
        },
      },
      {
        name: "Lifull Connect",
        href: "https://www.lifullconnect.com/careers/",
        image: {
          src: "/assets/img/sponsors/lifull-connect.png",
          alt: "Lifull Connect",
        },
      },
      {
        name: "Wallapop",
        href: "https://jobs.wallapop.com/es/",
        image: {
          src: "/assets/img/sponsors/wallapop.png",
          alt: "Wallapop",
        },
      },
      {
        name: "Glovo",
        href: "http://www.glovoapp.com/es",
        image: {
          src: "/assets/img/sponsors/glovo.png",
          alt: "Glovo",
        },
      },
      {
        name: "Adaptive",
        href: "https://www.weareadaptive.com",
        image: {
          src: "/assets/img/sponsors/adaptive-logo.png",
          alt: "Adaptive",
        },
      },
    ],
    supporters: [
      {
        name: "Barcelona Java Users Group",
        href: "http://www.barcelonajug.org",
        image: {
          src: "/assets/img/logos/logo_bicolor_blog_barcelonajug.png",
          alt: "Barcelona Java Users Group",
        },
      },
      {
        name: "Barcelona Activa",
        href: "http://www.barcelonactiva.cat/",
        image: {
          src: "/assets/img/sponsors/barcelona-activa.png",
          alt: "Barcelona Activa",
        },
      },
      {
        name: "Google Developer Group Barcelona",
        href: "https://www.meetup.com/es-ES/GDG-Barcelona/",
        image: {
          src: "/assets/img/sponsors/gdg_barcelona.png",
          alt: "Google Developer Group Barcelona",
        },
      },
      {
        name: "Google Developer Group Tarragona",
        href: "https://gdgtarragona.blogspot.com/",
        image: {
          src: "/assets/img/sponsors/gdg_tarragona.png",
          alt: "Google Developer Group Tarragona",
        },
      },
      {
        name: "Col•legi Oficial d'Enginyeries Tècniques i Grau en Enginyeria Informàtica de Catalunya",
        href: "https://www.coetic.cat",
        image: {
          src: "/assets/img/sponsors/coetic.jpg",
          alt: "Col•legi Oficial d'Enginyeries Tècniques i Grau en Enginyeria Informàtica de Catalunya",
        },
      },
    ],
  }
  return (
    <StyledContainer fluid>
      <Row>
        <Col xs={{ offset: 2, span: 3 }}>
          <h1>/ Sponsors</h1>
        </Col>
        <Col xs={{ span: 5 }}>
          <p>
            Are you a technology company? Interested in meeting enthusiasts and
            geek people for technology?
          </p>
          <p>
            This is a <strong>priceless opportunity</strong> to participate in
            the first big Java and JVM conference in Spain, to promote your
            company and to support technological communities.
          </p>
        </Col>
      </Row>
      <div>
        <SponsorDetails
          key={1}
          index={1}
          text="top"
          type="title-top"
          sponsors={data.top}
        />
        <SponsorDetails
          key={2}
          index={2}
          text="premium"
          type="title-regular"
          sponsors={data.premium}
        />
        <SponsorDetails
          key={3}
          index={3}
          text="regular"
          type="title-startup"
          sponsors={data.regular}
        />
        <SponsorDetails
          key={4}
          index={4}
          text="supporters"
          type="title-supporter"
          sponsors={data.supporters}
        />
      </div>
    </StyledContainer>
  )
}

export default SponsorSection
