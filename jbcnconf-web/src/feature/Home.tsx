import Jbcnconf from "./common/Jbcnconf"
import EventDate from "./common/EventDate"
import React from "react"
import Articles from "./Articles"
import SpeakerSection from "./speakers/Speakers.section"
import Sponsors from "./sponsors/Sponsor.section"
import Countdown from "./common/CountDown"
import styled from "styled-components"
// import YouTube from "react-youtube"
import homeBg from "../img/home-bg.jpg"

const StyledTop = styled.div`
  text-align: center;
  background-color: #464646;
  color: ghostwhite;

  img {
    width: 100%;
  }
`

/*const onStart = (props: any) => {
  props.target.setVolume(0)
}*/

const Home = () => {
  return (
    <>
      <StyledTop>
        {/*<YouTube
          videoId="SEwqPzGxav4"
          opts={{
            height: "700px",
            width: "100%",
            playerVars: {
              autoplay: 1,
              controls: 0,
              listType: "user_uploads",
              showinfo: 0,
            },
          }}
          onReady={onStart}
        />*/}
        <img src={homeBg} alt="home-bg" />
        <Jbcnconf />
        <EventDate />
        <Countdown />
      </StyledTop>
      <Articles />
      <SpeakerSection />
      <Sponsors />
    </>
  )
}

export default Home
