import styled from "styled-components"
import { Button, Col, Container, Row } from "react-bootstrap"
import { EditLocation, Home, User } from "@styled-icons/boxicons-solid"
import leftBg from "../img/white-navy-lt.jpg"
import rightBg from "../img/white-navy-bt.jpg"
import { Instagram, Linkedin, Twitter } from "@styled-icons/fa-brands"

interface Company {
  name: string
  logo: string
  linkedin: string
  twitter: string
  web: string
  instagram: string
  location: string
  offers: Offer[]
}

interface Offer {
  title: string
  description: string
  url: string
}

interface JobOffer {
  company: Company
}

const StyledContainer = styled(Container)`
{
  background-color: white;
  color: #25537c;
  min-height: 85.8vh;
  background-image: url(${leftBg}), url("${rightBg}");
  background-position: left 40px, right 40px;
  background-repeat: no-repeat, no-repeat;
}

  h1 {
    color: var(--color-navy);
    text-transform: uppercase;
    font-weight: bold;
  }

  h2 a {
    font-family: 'Exo', sans-serif;
    text-decoration: none;
    color: var(--color-navy);
  }

  svg {
    max-height: 24px;
  }

  h1:before {
    content: "/";
    font-weight: bold;
  }

  .job-listing-item-content {
    margin-top: 20px;
  }
  
  .job-listing-item-content:nth-child(2n){
    text-align: right;
  }

  .job-listing-company-social-icons {
    display: flex;
    justify-content: space-evenly;

    a {
      min-width: 24px;
    }
  }
`

const JobListingItem = (props: { job: JobOffer }) => {
  const { offers } = props.job.company
  return <Row>
    <Col xs={{ offset: 2, span: 8 }}>
      <div className="job-listing-company-logo">
        <img src={props.job.company.logo} alt={props.job.company.name} width="100%" />
      </div>
      <div className="job-listing-company-content">
        <div className="job-listing-company-social-icons">
          <a href={props.job.company.web}><Home /></a>
          {props.job.company.linkedin && <a href={props.job.company.linkedin}><Linkedin /></a>}
          {props.job.company.twitter && <a href={props.job.company.twitter}><Twitter /></a>}
          {props.job.company.instagram && <a href={props.job.company.instagram}><Instagram /></a>}
        </div>
      </div>
      {offers.map((offer: Offer) => <div className="job-listing-item-content">
        <div className="job-listing-item-content-title">
          <h2><User /> <a href={offer.url}>{offer.title}</a></h2>
          <EditLocation /> {props.job.company.location}
        </div>
        <div className="job-listing-item-content-description">
          {offer.description}
        </div>
        <Button variant="danger" size="sm" href={offer.url}>Apply</Button>
      </div>)}
    </Col>
  </Row>
}

const JobListing = () => {
  const data: JobOffer[] = [
    {
      company: {
        name: "Adevinta",
        logo: "https://www.jbcnconf.com/2022/assets/img/sponsors/adevinta.png",
        linkedin: "https://www.linkedin.com/company/jbcn/",
        twitter: "https://twitter.com/jbcn",
        web: "https://jbcn.org/",
        instagram: "https://www.instagram.com/jbcn/",
        location: "Barcelona, Spain",
        offers: [
          {
            title: "Full Stack Developer",
            description: "We are on a mission to transform grocery ecommerce through cutting-edge technology and looking for problem-solvers with a passion for Clean Code and TDD. Are you a Java Software Engineer looking for a new challenge? Then this role could be for you!",
            url: "https://www.jbcn.org/careers/"
          },
          {
            title: "Full Stack Developer",
            description: "We are on a mission to transform grocery ecommerce through cutting-edge technology and looking for problem-solvers with a passion for Clean Code and TDD. Are you a Java Software Engineer looking for a new challenge? Then this role could be for you!",
            url: "https://www.jbcn.org/careers/"
          }
        ]
      }
    },
    {
      company: {
        name: "Red Hat",
        logo: "https://www.jbcnconf.com/2022/assets/img/sponsors/redhat_rgb.png",
        linkedin: "https://www.linkedin.com/company/jbcn/",
        twitter: "https://twitter.com/jbcn",
        web: "https://jbcn.org/",
        instagram: "https://www.instagram.com/jbcn/",
        location: "Barcelona, Spain",
        offers: [
          {
            title: "Full Stack Developer",
            description: "We are on a mission to transform grocery ecommerce through cutting-edge technology and looking for problem-solvers with a passion for Clean Code and TDD. Are you a Java Software Engineer looking for a new challenge? Then this role could be for you!",
            url: "https://www.jbcn.org/careers/"
          }
        ]
      }
    }
  ]

  return <StyledContainer fluid>
    <Row><Col>&nbsp;</Col></Row>
    <Row>
      <Col xs={{ offset: 2, span: 3 }}>
        <h1>Job Offers</h1>
      </Col>
      <Col xs={{ span: 3, offset: 2 }}>Have a look at some opportunities with our sponsors</Col>
    </Row>
    <Container>
      {data.map((job, index) => <JobListingItem job={job} key={index} />)}
    </Container>
  </StyledContainer>
}
export default JobListing
