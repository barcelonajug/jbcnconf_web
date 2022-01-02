import styled from "styled-components"
import { Container } from "react-bootstrap"
import bg from "../../img/blue-green-bt.jpg"
import leftBg from "../../img/white-green-lt.jpg"
import rightBg from "../../img/white-green-bt.jpg"
import bottomBg from "../../img/green-white-wave.jpg"
import background from "../../img/green-background.jpg"

export const SpeakerContainer = styled(Container)`
{
  background-image: url(${bg});
  background-color: var(--color-blue);
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 20%;
}

  h3 {
    color: var(--color-yellow);
  }

  svg {
    color: ghostwhite;
    max-height: 24px;
    max-width: 24px;
    transition: all 0.5s ease-in-out;

    &:hover {
      color: var(--color-yellow);
    }
  }

  img {
    padding: 3px;
    border: 1px solid var(--color-fucsia);
    transition: all 0.5s ease-in-out;

    &:hover {
      border: 1px solid var(--color-yellow);
    }
  }

  #social-links {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.5em;

    div {
      flex-grow: 1;
      text-align: center;
    }
  }
`

export const StyledContainer = styled(Container)`
{
  background-color: var(--color-green);
  color: ghostwhite;
  background-image: url(${leftBg}), url(${rightBg}), url(${bottomBg});
  background-repeat: no-repeat, no-repeat, repeat-x;
  background-position: left 20px, right 20px, center bottom;
  background-size: 10%, 10%, contain;
  padding-bottom: 150px;
}

  svg {
    max-height: 24px;
    color: ghostwhite;
  }

  svg:hover {
    transition: all 0.5s ease;
    color: var(--color-fucsia);
  }

  h2:before {
    content: "/";
    font-weight: bold;
    margin-left: 10px;
  }

  img {
    clip-path: inset(5% 5% 5% 5% round 2%);
    filter: grayscale(80%) contrast(120%) brightness(120%);
    transition: all 250ms ease-in-out;
  }

  img:hover {
    clip-path: inset(10% 10% 10% 10% round 5%);
    filter: grayscale(10%);
    transition: all 500ms ease-in-out;
    transform: scale(1.18);
    box-shadow: 10px 10px red;
  }

  .card {
    background-color: transparent;
    border: none;

    .card-body {
      padding: 0.2rem;
    }

    h3 a {
      color: ghostwhite;
      text-decoration: none;
    }

    h4 {
      color: var(--color-fucsia);
      font-size: 1rem;
    }
  }
`

export const StyledSpeakerSection = styled(Container)`
{
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: top right;
  background-color: var(--color-green);
  padding-top: 45px;
  color: ghostwhite;
  font-size: 12px;
}

  .text {
    text-align: right;
  }

  .speaker-name {
    background-color: var(--color-fucsia);
    color: ghostwhite;
    text-align: center;
  }

  .all-speakers {
    font-family: "Roboto slab", sans-serif;
    text-align: right;
    color: var(--color-fucsia);
    font-size: 18px;
    font-weight: bold;
  }
`
