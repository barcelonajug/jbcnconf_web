import React from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import SponsorPage from "./feature/sponsors/Sponsors.page"
import Contact from "./feature/Contact"
import Home from "./feature/Home"
import Footer from "./feature/common/Footer"
import Members from "./feature/about/Members"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import SpeakerPage from "./feature/speakers/Speakers.page"
import SpeakerDetail from "./feature/speakers/Speaker.detail"
import JobListing from "./feature/JobListing"
import TalksPage from "./feature/talks/Talks.page"
import TalksDetail from "./feature/talks/Talks.detail"
import { TopMenu } from "./feature/common/TopMenu"
import SchedulePage from "./feature/schedule/Schedule.page"
import NotFound from "./feature/common/NotFound"

const App = () => {
  const location = useLocation()

  return (
    <div>
      <TopMenu />
      <TransitionGroup>
        <CSSTransition classNames="fade" key={location.key} timeout={750}>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="sponsors" element={<SponsorPage />} />
              <Route path="talks/:id" element={<TalksDetail />} />
              <Route path="talks" element={<TalksPage />} />
              <Route path="contact" element={<Contact />} />
              <Route path="about-us" element={<Members />} />
              <Route path="speakers" element={<SpeakerPage />}>
                <Route path=":speakerId" element={<SpeakerDetail />} />
              </Route>
              <Route path="job-offers" element={<JobListing />} />
              <Route path="schedule" element={<SchedulePage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  )
}

export default App
