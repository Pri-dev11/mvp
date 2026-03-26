import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import EventsCard from "../eventsCard/EventsCard";
import { fetchEventsCalendar } from "../../Redux/Actions";
import './EventsCalendar.css';

function EventsCalendar(props) {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedMonth, setSelectedMonth] = useState('March');
  const [events, setEvents] = useState([]);

  const filterRef = React.useRef(null);
  const [showYearPicker, setShowYearPicker] = useState(false);
  const [showMonthPicker, setShowMonthPicker] = useState(false);

  // Fetch events when filters change (also runs on mount)
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

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowYearPicker(false);
        setShowMonthPicker(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400; // Adjust as needed
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="events-calendar-section" id="events-calendar">
      <div className="events-calendar-bg"></div>

      <div className="events-calendar-content">
        <div className="events-header">
          <h2>Events Calendar</h2>
          <p>Never miss a moment—view all upcoming events here</p>
        </div>

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

        {Array.isArray(events) && events.length > 3 ? (
          <div className="events-carousel-controls">
            <button className="carousel-btn nav-left" onClick={() => scroll('left')}>&larr;</button>
            <button className="carousel-btn nav-right" onClick={() => scroll('right')}>&rarr;</button>
          </div>
        ) : null}

        {props.loading ? (
          <div className="loading-events">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading events...</span>
            </div>
            <p className="mt-2">Loading events...</p>
          </div>
        ) : props.error ? (
          <div className="error-events text-danger fw-bold">
            Something went wrong!!
            <p className="text-muted small fw-normal">{props.error}</p>
          </div>
        ) : (
          <div className="events-cards-container" ref={scrollRef}>
            {Array.isArray(events) && events.length > 0 ? (
              events.map((event, index) => (
                <EventsCard key={event._id || event.id || index} event={event} />
              ))
            ) : (
              <div className="no-events p-5 calendar-no-data">No events found for this period.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  eventsList: state.eventsCalendar.data,
  loading: state.eventsCalendar.loading,
  error: state.eventsCalendar.error,
});

const mapDispatchToProps = {
  fetchEventsCalendar,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsCalendar);