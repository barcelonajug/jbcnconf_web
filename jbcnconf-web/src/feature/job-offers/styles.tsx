import styled from "styled-components"
import { Container } from "react-bootstrap"
import leftBg from "../../img/white-navy-lt.jpg"
import rightBg from "../../img/white-navy-bt.jpg"
import slashBg from "../../img/slash-background.jpg"

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

  .company-name {
    text-align: center;
    color: var(--color-fucsia);
    font-weight: bold;
    background-image: url(${slashBg});
    background-repeat: no-repeat;
    background-position: -239% 0;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-position: -100% 0;
    }
  }

  .job-item {
    padding-bottom: 50px;
  }

  .image-column {
    position: relative;
  }

  .image-column img {
    position: absolute;
    top: 50%;
    width: 95%;
    transform: translateY(-50%);
  }

  .job-listing-item-content {
    margin-top: 20px;
  }

  .job-listing-company-social-icons {
    display: flex;
    justify-content: space-evenly;

    a {
      min-width: 24px;
    }
  }

  .order-first, .order-last {
    border: 1px solid var(--color-fucsia);
    padding: 5px;
  }

  .btn-danger {
    margin-top: 20px;
    background-color: var(--color-fucsia);
  }
`
