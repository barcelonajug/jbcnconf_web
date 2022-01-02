import styled from "styled-components"
import { Container } from "react-bootstrap"
import leftBg from "../../img/white-navy-lt.jpg"
import rightBg from "../../img/white-navy-bt.jpg"

export const StyledContainer = styled(Container)`
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
  
  .btn-danger{
    margin-top: 20px;
    background-color: var(--color-fucsia);
  }
`
