import { Route, Routes } from "react-router-dom"
import Home from "../Home"
import SponsorPage from "../sponsors/Sponsors.page"
import TalksDetail from "../talks/Talks.detail"
import TalksPage from "../talks/Talks.page"
import Contact from "../Contact"
import Members from "../about/Members"
import SpeakerPage from "../speakers/Speakers.page"
import SpeakerDetail from "../speakers/Speaker.detail"
import JobListing from "../JobListing"
import SchedulePage from "../schedule/Schedule.page"
import NotFound from "./NotFound"
import CallForPapers from "../CallForPapers"

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="sponsors" element={<SponsorPage />} />
    <Route path="call-for-papers" element={<CallForPapers />} />
    <Route path="talks/:id" element={<TalksDetail />} />
    <Route path="talks" element={<TalksPage />} />
    <Route path="contact" element={<Contact />} />
    <Route path="about-us" element={<Members />} />
    <Route path="speakers" element={<SpeakerPage />} />
    <Route path="speakers/:speakerId" element={<SpeakerDetail />} />
    <Route path="job-offers" element={<JobListing />} />
    <Route path="schedule" element={<SchedulePage />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
)
