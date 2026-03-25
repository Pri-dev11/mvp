import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import EventsCard from "../eventsCard/EventsCard"
import './Events.css'

const mockUpcomingEvent = {
  id: 1,
  startDate: "2026-05-01T08:00:00.000Z",
  title: "Moroccan leg of the UAEPresidentCup Series",
  country: "Morocco",
  countryFlag: "🇲🇦",
  date: "1 may, 2025",
};

const mockEvents = [
  { id: 1, remainingDays: 7, title: "Moroccan leg of the UAEPresidentCup Series", country: "Morocco", date: "30 apr, 2025" },
  { id: 2, remainingDays: 31, title: "Moroccan leg of the UAEPresidentCup Series", country: "Morocco", date: "30 may, 2025" },
  { id: 3, remainingDays: 50, title: "Moroccan leg of the UAEPresidentCup Series", country: "Morocco", date: "3 jun, 2025" },
];


const SEASONS = ["2024", "2025", "2026"];
const EVENT_TYPES = ["All Events", "Race", "Cup", "Series"];

function useCountdown(targetDateStr) {
  const calcTimeLeft = () => {
    const diff = new Date(targetDateStr) - new Date();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };
  const [timeLeft, setTimeLeft] = useState(calcTimeLeft);
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calcTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [targetDateStr]);
  return timeLeft;
}

function Events() {
  const [events, setEvents] = useState([]);
  const [upcomingEvent] = useState(mockUpcomingEvent);
  const [selectedSeason, setSelectedSeason] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("");
  const [seasonOpen, setSeasonOpen] = useState(false);
  const [eventOpen, setEventOpen] = useState(false);
  const [loading, setLoading] = useState(true);


  // API Integration Scope
  const fetchEvents = async (year, month) => {
    setLoading(true);
    try {
      // TODO: Replace with actual API call
      // const response = await fetch(`/api/events?year=${year}&month=${month}`);
      // const data = await response.json();
      // setEvents(data);

      // Simulating API delay and mock data
      setTimeout(() => {
        setEvents(mockEvents);
        setLoading(false);
      }, 500);
    } catch (error) {
      console.error("Failed to fetch events:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents(selectedSeason, selectedEvent);
  }, [selectedSeason, selectedEvent]);

  const countdown = useCountdown(upcomingEvent.startDate);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <div className="events-page">
      <div className="events-page-header text-center">
        <h1 className="events-title">Events &amp; Races</h1>
        <p className="events-subtitle">Follow the latest events and races in the league</p>
      </div>

      <div className="upcoming-events-container">
        <div className="upcoming-event-col">
          <div className="upcoming-event-card h-100">
            <div className="upcoming-event-card-header">
              <h2 className="upcoming-event-heading">Upcoming Event</h2>
              <p className="upcoming-event-sub">Don't miss what's coming up in the President's Cup lineup</p>
            </div>
            <div className="upcoming-event-card-body">
              <div className="upcoming-event-meta">
                <div className="upcoming-meta-item">
                  <span className="meta-label">
                    <i className="fa-solid fa-globe me-1"></i> Event Country
                  </span>
                  <span className="meta-value">
                    {upcomingEvent.country} {upcomingEvent.countryFlag}
                  </span>
                </div>
                <div className="upcoming-meta-item">
                  <span className="meta-label">
                    <i className="fa-regular fa-calendar me-1"></i> Event Date
                  </span>
                  <span className="meta-value">{upcomingEvent.date}</span>
                </div>
              </div>
            </div>
            {/* Horse silhouette decorative */}
            <div className="horse-silhouette" aria-hidden="true">🐎</div>
          </div>
        </div>

        <div className="countdown-col">
          <div className="countdown-card h-100">
            <div className="countdown-card-header">
              <h2 className="countdown-heading">Event Countdown</h2>
              <p className="countdown-sub">Mark your calendar: days, hours, and minutes to the grand start</p>
            </div>
            <div className="countdown-card-body">
              <div className="countdown-grid">
                {[
                  { value: pad(countdown.days), label: "Days" },
                  { value: pad(countdown.hours), label: "Hours" },
                  { value: pad(countdown.minutes), label: "Minutes" },
                  { value: pad(countdown.seconds), label: "Seconds" },
                ].map(({ value, label }) => (
                  <div key={label} className="countdown-unit">
                    <div className="countdown-box">{value}</div>
                    <span className="countdown-label">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="events-divider" />

      <div className="events-filters d-flex justify-content-center gap-3 mt-4">
        <div className="filter-dropdown-wrapper">
          <button className="filter-pill" onClick={() => { setSeasonOpen(o => !o); setEventOpen(false); }}>
            <i className="fa-regular fa-calendar me-2"></i>
            {selectedSeason || "Season"}
            <i className={`fa-solid fa-chevron-down ms-2 filter-chevron ${seasonOpen ? "open" : ""}`}></i>
          </button>
          {seasonOpen && (
            <div className="filter-dropdown-menu">
              {SEASONS.map(s => (
                <div key={s} className="filter-dropdown-item" onClick={() => { setSelectedSeason(s); setSeasonOpen(false); }}>{s}</div>
              ))}
            </div>
          )}
        </div>

        <div className="filter-dropdown-wrapper">
          <button className="filter-pill" onClick={() => { setEventOpen(o => !o); setSeasonOpen(false); }}>
            <i className="fa-regular fa-clock me-2"></i>
            {selectedEvent || "Event"}
            <i className={`fa-solid fa-chevron-down ms-2 filter-chevron ${eventOpen ? "open" : ""}`}></i>
          </button>
          {eventOpen && (
            <div className="filter-dropdown-menu">
              {EVENT_TYPES.map(e => (
                <div key={e} className="filter-dropdown-item" onClick={() => { setSelectedEvent(e); setEventOpen(false); }}>{e}</div>
              ))}
            </div>
          )}
        </div>
      </div>

      {loading ? (
        <div className="loading-events">Loading events...</div>
      ) : (
        <Row className="g-4 px-3">
          {events.map(event => (
            <Col key={event.id} lg={4} md={6} sm={12}>
              <EventsCard event={event} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default Events;