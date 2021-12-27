import styled from "styled-components"
import { Col, Container, Row } from "react-bootstrap"
import { EditLocation, User } from "@styled-icons/boxicons-solid"

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
  background-color: black;
  color: ghostwhite;
  min-height: 85.8vh;

  svg {
    max-height: 24px;
  }
`

const JobListingItem = (props: { job: JobOffer }) => (
  <div>
    <Row>
      <Col>
        <div className="job-listing-item-logo">
          <img src={props.job.company.logo} alt={props.job.company.name} />
        </div>
        <div className="job-listing-item-content">
          <div className="job-listing-item-content-title">
            <a href={props.job.company.web}>{props.job.company.name}</a>
          </div>
          <div className="job-listing-item-content-description">
            <EditLocation /> {props.job.company.location}
          </div>
        </div>
        {props.job.company.offers.map((offer: Offer) => (
          <div className="job-listing-item-content">
            <div className="job-listing-item-content-title">
              <User /> <a href={offer.url}>{offer.title}</a>
            </div>
            <div className="job-listing-item-content-description">
              {offer.description}
            </div>
          </div>
        ))}
      </Col>
    </Row>
  </div>
)
const JobListing = () => {
  const data: JobOffer[] = [
    {
      company: {
        name: "JBCN",
        logo: "https://jbcn.org/wp-content/uploads/2019/01/JBCN-Logo-Color-RGB-300x300.png",
        linkedin: "https://www.linkedin.com/company/jbcn/",
        twitter: "https://twitter.com/jbcn",
        web: "https://jbcn.org/",
        instagram: "https://www.instagram.com/jbcn/",
        location: "Barcelona, Spain",
        offers: [
          {
            title: "Full Stack Developer",
            description: "",
            url: "https://www.jbcn.org/careers/",
          },
          {
            title: "Full Stack Developer",
            description: "",
            url: "https://www.jbcn.org/careers/",
          },
        ],
      },
    },
    {
      company: {
        name: "JBCN",
        logo: "https://jbcn.org/wp-content/uploads/2019/01/JBCN-Logo-Color-RGB-300x300.png",
        linkedin: "https://www.linkedin.com/company/jbcn/",
        twitter: "https://twitter.com/jbcn",
        web: "https://jbcn.org/",
        instagram: "https://www.instagram.com/jbcn/",
        location: "Barcelona, Spain",
        offers: [
          {
            title: "Full Stack Developer",
            description: "",
            url: "https://www.jbcn.org/careers/",
          },
        ],
      },
    },
  ]

  return (
    <StyledContainer fluid>
      <h1>Job Listing</h1>
      {data.map((job, index) => (
        <JobListingItem job={job} key={index} />
      ))}
    </StyledContainer>
  )
}
export default JobListing
