import React from "react";
import "./Home.css";
import LandingPage from "../landing/LandingPage";
import LiveEvent from "../liveEvents/LiveEvent";
import News from "../news/News";
import EventsCalendar from "../eventsCalendar/EventsCalendar";
import BookExperienceCard from "../bookExperienceCard/BookExperienceCard";
import Winners from "../winners/Winners"
import FAQ from "../faq/FAQ";

function Home() {
  return (
    <div className="home-container">
      <LandingPage />
      <LiveEvent />
      <News />
      <EventsCalendar />
      <BookExperienceCard from="home" />
      <Winners />
      <FAQ />
    </div>
  );
}

export default Home;
