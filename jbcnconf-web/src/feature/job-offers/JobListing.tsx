import { Button, Col, Container, Row } from "react-bootstrap"
import { EditLocation, User } from "@styled-icons/boxicons-solid"
import { JobItemProps, JobOffer, Offer } from "./types"
import { FC, useEffect } from "react"
import { StyledContainer } from "./styles"

const JobListingItem: FC<JobItemProps> = (props: JobItemProps) => {
  return <>
    <Row><Col className="company-name"><h2>{props.job.company.name}</h2></Col></Row>
    {props.job.company.offers.map((offer: Offer, index: number) => <Row className="job-item" key={index}>
      <Col className="image-column" xs={{ span: 2, order: index % 2 === 0 ? "first" : "last" }}>
        <img src={props.job.company.logo} alt={props.job.company.name} />
      </Col>
      <Col xs={{ span: 10 }}>
        <div className="job-listing-item-content-title">
          <h2><User /> <a href={offer.url}>{offer.title}</a></h2>
          <EditLocation /> {props.job.company.location}
        </div>
        <div className="job-listing-item-content-description">
          {offer.description}
        </div>
        <Button variant="danger" size="sm" href={offer.url}>Apply</Button>
      </Col>
    </Row>)}</>
}

const JobListing: FC = () => {
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
    },
    {
      company: {
        name: "Roche",
        logo: "https://www.jbcnconf.com/2022/assets/img/sponsors/roche.jpg",
        linkedin: "https://www.linkedin.com/company/jbcn/",
        twitter: "https://twitter.com/jbcn",
        web: "https://jbcn.org/",
        instagram: "https://www.instagram.com/jbcn/",
        location: "Barcelona, Spain",
        offers: [{
          title: "Senior Software Engineer",
          description: "We are on a mission to transform grocery ecommerce through cutting-edge technology and looking for problem-solvers with a passion for Clean Code and TDD. Are you a Java Software Engineer looking for a new challenge? Then this role could be for you!",
          url: "https://www.jbcn.org/careers/"
        }, {
          title: "Distinguished Engineer",
          description: "We are on a mission to transform grocery ecommerce through cutting-edge technology and looking for problem-solvers with a passion for Clean Code and TDD. Are you a Java Software Engineer looking for a new challenge? Then this role could be for you!",
          url: "https://www.jbcn.org/careers/"
        }, {
          title: "Devops Engineer",
          description: "We are on a mission to transform grocery ecommerce through cutting-edge technology and looking for problem-solvers with a passion for Clean Code and TDD. Are you a Java Software Engineer looking for a new challenge? Then this role could be for you!",
          url: "https://www.jbcn.org/careers/"
        }]
      }
    }
  ]

  useEffect(() => {
    document.title = "JBCNConf - Job Listing"
  }, [])

  return <StyledContainer fluid>
    <Row><Col>&nbsp;</Col></Row>
    <Row>
      <Col xs={{ offset: 2, span: 3 }}>
        <h1>Job Offers</h1>
      </Col>
      <Col xs={{ span: 3, offset: 2 }}>Have a look at some opportunities with our sponsors</Col>
    </Row>
    <Container>
      {data.map(job => <JobListingItem job={job} />)}
    </Container>
    <Row><Col>&nbsp;</Col></Row>
  </StyledContainer>
}
export default JobListing
