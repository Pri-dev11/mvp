import React from "react";
import "./Home.css";
import LandingPage from "../landing/LandingPage";
import LiveEvent from "../liveEvents/LiveEvent";
import News from "../news/News";
import FAQ from "../faq/FAQ";

function Home() {
  return (
    <div className="home-container">
      <LandingPage />
      <LiveEvent />
      <News value="home" />
      {/* <Experience />
      <EventsCalendar />
      <Winners /> */}
      <FAQ />
    </div>
  );
}

export default Home;
