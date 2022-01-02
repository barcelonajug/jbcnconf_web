import { Button, Col, Container, Row } from "react-bootstrap"
import { EditLocation, Home, User } from "@styled-icons/boxicons-solid"
import { Instagram, Linkedin, Twitter } from "@styled-icons/fa-brands"
import { StyledContainer } from "./styles"
import { JobOffer, Offer } from "./types"

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
