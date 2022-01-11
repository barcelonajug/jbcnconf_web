import styled from "styled-components"
import { Container } from "react-bootstrap"
import SpeakerBg from "../../img/white-green-lt.jpg"
import leftBg from "../../img/navy-green-lt.jpg"
import rightBg from "../../img/navy-green-bg.jpg"
import bottomBg from "../../img/green-yellow-bottom.jpg"
import whiteRedLtBg from "../../img/white-red-lt.jpg"
import whiteRedBtBg from "../../img/white-red-bt.jpg"

export const colors = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"]

export const TalkContainer = styled(Container)`
{
  background-color: #fff;
  color: var(--color-fucsia);
  background-image: url(${whiteRedLtBg}), url(${whiteRedBtBg});
  background-repeat: no-repeat, no-repeat;
  background-size: 10%, 10%;
  background-position: left 50px, right 50px;
  padding-top: 50px;
  padding-bottom: 50px;
}

  h1 {
    text-transform: uppercase;
  }

  h1:before {
    font-weight: bold;
    content: "/"
  }

  p.abstract {
    text-align: right;
  }

  .badge {
    color: ghostwhite;
  }
`

export const SpeakerContainer = styled(Container)`
{
  background-image: url(${SpeakerBg});
  background-repeat: no-repeat;
  background-position: left top;
  background-color: var(--color-green);
  background-size: 250px;
  color: ghostwhite;
}

  svg {
    max-height: 24px;
    color: ghostwhite;
  }

  .row {
    padding-top: 100px;
  }

  img {
    border: 2px solid var(--color-yellow);
    padding: 7px;
  }

  .social-icons {
    display: flex;
    justify-content: space-evenly;
    padding-top: 10px;

    a {
      height: 100%;
      width: 24px;
    }
  }
`

export const SpeakersPageContainer = styled(Container)`
{
  padding-top: 50px;
  background-color: var(--color-green);
  color: var(--color-navy);
  background-image: url(${leftBg}), url(${rightBg}), url(${bottomBg});
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: left 50px, right 50px, center bottom;
  background-size: auto, auto, contain;
  padding-bottom: 50px;

}

  h1 {
    color: var(--color-navy);
    text-transform: uppercase;
  }

  h1:before {
    content: "/ ";
    font-weight: bold;
  }

  .description {
    text-align: right;
  }

`

export const TalksContainer = styled(Container)`
  img {
    width: 100%;
    border: 1px solid var(--color-fucsia);
    padding: 7px;
  }

  h2, p {
    color: var(--color-navy);
  }

  .btn {
    background-color: var(--color-fucsia);
    color: ghostwhite;;

    svg {
      color: ghostwhite;
      max-width: 24px;
    }
  }

  .badge {
    background-color: transparent !important;
  }

  .bg-primary {
    border: 1px solid var(--color-navy);
    color: var(--color-navy);
  }

  .bg-danger {
    color: var(--color-fucsia);
    border: 1px solid var(--color-fucsia);
  }

  .bg-success {
    color: var(--color-green);
    border: 1px solid var(--color-green);
  }

  .bg-secondary {
    color: ghostwhite;
    border: 1px solid ghostwhite;
  }
`
