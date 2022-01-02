import styled from "styled-components"
import { Container } from "react-bootstrap"
import leftBg from "../../img/white-blue-lt.jpg"
import rightBg from "../../img/white-blue-bt.jpg"

export const StyledMembers = styled(Container)`
  @keyframes blurInOut {
    0% {
      filter: grayscale(50%) blur(0);
    }
    50% {
      filter: grayscale(25%) blur(4px);
    }
    100% {
      filter: grayscale(0) blur(0);
    }
  } {
  color: var(--color-blue);
  background-color: ghostwhite;
  background-image: url(${leftBg}), url(${rightBg});
  background-repeat: no-repeat, no-repeat;
  background-position: left 20px, right 20px;
  background-size: 10%, 10%;
}

  h3:before {
    content: "/";
    font-weight: bold;
    margin-left: 10px;
  }

  svg {
    max-height: 24px;
  }

  .card {
    background-color: transparent;
    border: none;

    .card-body {
      padding: 5px 0;
    }

    .card-subtitle {
      color: var(--color-fucsia);
    }

    .card-footer {
      background-color: transparent;
      border: none;
      display: flex;
      justify-content: center;

      small {
        flex-grow: 1;
        text-align: center;
      }
    }

    .card-text {
      font-size: 12px;
      padding-top: 10px;
    }

    .card-title {
      font-family: "Monda", cursive;
    }
  }

  img {
    filter: grayscale(30%);

    &:hover {
      filter: grayscale(0);
      animation-name: blurInOut;
      animation-duration: 250ms;
    }
  }

  .col:nth-child(2n) {
    .card {
      padding-top: 10px;
    }

    .card-title,
    .card-footer a {
      color: var(--color-green);
    }

    .card-subtitle {
      color: var(--color-blue);
    }
  }

  .col:nth-child(3n) {
    .card {
      padding-top: 20px;
    }

    .card-title,
    .card-footer a {
      color: #26547c;
    }

    .card-subtitle {
      color: var(--color-yellow);
    }
  }

  .col:nth-child(5n) {
    .card-title,
    .card-footer a {
      color: var(--color-fucsia);
    }

    .card-subtitle {
      color: var(--color-green);
    }
  }
`
