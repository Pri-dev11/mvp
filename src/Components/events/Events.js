import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchUpcomingEvents, fetchEventsCalendar } from '../../Redux/Actions';
import EventsCard from "../eventsCard/EventsCard"
import './Events.css'

// const SEASONS = ["2024", "2025", "2026"];
// const EVENT_TYPES = ["All Events", "Race", "Cup", "Series"];

function useCountdown(targetDateStr) {
  const calcTimeLeft = () => {
    if (!targetDateStr) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    const diff = new Date(targetDateStr) - new Date();
    if (diff <= 0 || isNaN(diff)) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
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

function Events(props) {
  const [events, setEvents] = useState([]);
  const [upcomingEvent, setUpcomingEvent] = useState(null);
  // const [selectedSeason, setSelectedSeason] = useState("");
  // const [selectedEvent, setSelectedEvent] = useState("");
  // const [seasonOpen, setSeasonOpen] = useState(false);
  // const [eventOpen, setEventOpen] = useState(false);
  // const [loading, setLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedMonth, setSelectedMonth] = useState('March');

  const filterRef = React.useRef(null);
  const [showYearPicker, setShowYearPicker] = useState(false);
  const [showMonthPicker, setShowMonthPicker] = useState(false);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const day = date.getDate();
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${day}, ${month} ${year}`;
  }

  useEffect(() => {
    props.fetchUpcomingEvents();
  }, [])

  useEffect(() => {
    if (props.upcomingEventData) {
      let upcomingEventData = props.upcomingEventData?.data;
      if (Array.isArray(upcomingEventData) && upcomingEventData.length > 0) {
        setUpcomingEvent(upcomingEventData[0])
      }
    }
  }, [props.upcomingEventData]);

  useEffect(() => {
    let params = {
      month: selectedMonth,
      year: selectedYear
    }
    props.fetchEventsCalendar(params);
  }, [selectedYear, selectedMonth]);

  useEffect(() => {
    // Array is in props.eventsList.data as confirmed by the user
    if (props.eventsList && Array.isArray(props.eventsList.data)) {
      setEvents(props.eventsList.data);
    }
  }, [props.eventsList]);

  const countdown = useCountdown(upcomingEvent?.localStartTime);

  const pad = (n) => String(n).padStart(2, "0");

  if (props.loading) {
    return (
      <div className="events-page loading-state text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading events...</span>
        </div>
        <p className="mt-3">Loading upcoming events...</p>
      </div>
    );
  }

  if (props.error) {
    return (
      <div className="events-page error-state text-center py-5">
        <div className="text-danger fw-bold">Something went wrong!!</div>
        <p className="text-muted">{props.error}</p>
      </div>
    );
  }

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
                    {upcomingEvent?.country?.name}
                    <img className="upcoming-flag" src="upcomingEvent?.country?.flag" alt="flag"></img>
                  </span>
                </div>
                <div className="upcoming-meta-item">
                  <span className="meta-label">
                    <i className="fa-regular fa-calendar me-1"></i> Event Date
                  </span>
                  <span className="meta-value">{formatDate(upcomingEvent?.localStartTime)}</span>
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

      {/* <div className="events-filters d-flex justify-content-center gap-3 mt-4">
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
      </div> */}

      <div className="events-filters-container" ref={filterRef}>
        <div className="events-filters">
          <div className="custom-dropdown-container" onClick={() => { setShowYearPicker(!showYearPicker); setShowMonthPicker(false); }}>
            <span className="icon"><i className="fa-regular fa-calendar"></i></span>
            <div className="custom-dropdown-value">
              {selectedYear}
              <span className="custom-dropdown-arrow">▼</span>
            </div>

            {showYearPicker && (
              <div className="custom-popover" onClick={e => e.stopPropagation()}>
                <div className="calendar-grid">
                  {['2024', '2025', '2026', '2027', '2028', '2029'].map(year => (
                    <div
                      key={year}
                      className={`calendar-grid-item ${selectedYear === year ? 'selected' : ''}`}
                      onClick={() => { setSelectedYear(year); setShowYearPicker(false); }}
                    >
                      {year}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="filter-divider"></div>

          <div className="custom-dropdown-container" onClick={() => { setShowMonthPicker(!showMonthPicker); setShowYearPicker(false); }}>
            <span className="icon"><i className="fa-regular fa-clock"></i></span>
            <div className="custom-dropdown-value">
              {selectedMonth}
              <span className="custom-dropdown-arrow">▼</span>
            </div>

            {showMonthPicker && (
              <div className="custom-popover month-popover" onClick={e => e.stopPropagation()}>
                <div className="calendar-grid">
                  {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(month => (
                    <div
                      key={month}
                      className={`calendar-grid-item ${selectedMonth === month ? 'selected' : ''}`}
                      onClick={() => { setSelectedMonth(month); setShowMonthPicker(false); }}
                    >
                      {month.substring(0, 3)}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {props.loading ? (
        <div className="loading-events">Loading events...</div>
      ) : (
        <Row className="g-4 px-3">
          {Array.isArray(events) && events.length > 0 ? (
            events.map((event, index) => (
              <Col key={event.id} lg={4} md={6} sm={12}>
                <EventsCard key={event._id || event.id || index} event={event} />
              </Col>
            ))
          ) : (
            <div className="no-events p-5 events-no-data">No events found for this period.</div>
          )}
        </Row>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  upcomingEventData: state.upcomingEvent.data,
  eventsCalendarData: state.eventsCalendar.data,
  loading: state.upcomingEvent.loading,
  error: state.upcomingEvent.error,
  eventsList: state.eventsCalendar.data,
});

const mapDispatchToProps = {
  fetchUpcomingEvents,
  fetchEventsCalendar,
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);
