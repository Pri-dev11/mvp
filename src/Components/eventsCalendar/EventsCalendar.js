import React, { useState, useEffect } from 'react';
import EventsCard from "../eventsCard/EventsCard"
import './EventsCalendar.css';

const mockEvents = [
  { id: 1, remainingDays: 7, title: "Moroccan leg of the UAEPresidentCup Series", country: "Morocco", date: "30 apr, 2025" },
  { id: 2, remainingDays: 31, title: "Moroccan leg of the UAEPresidentCup Series", country: "Morocco", date: "30 may, 2025" },
  { id: 3, remainingDays: 50, title: "Moroccan leg of the UAEPresidentCup Series", country: "Morocco", date: "3 jun, 2025" },
];

function EventsCalendar() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState('2025');
  const [selectedMonth, setSelectedMonth] = useState('April');

  const filterRef = React.useRef(null);
  const [showYearPicker, setShowYearPicker] = useState(false);
  const [showMonthPicker, setShowMonthPicker] = useState(false);

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
    fetchEvents(selectedYear, selectedMonth);
  }, [selectedYear, selectedMonth]);

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

  return (
    <div className="events-calendar-section">
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
              <span className="icon"><i class="fa-regular fa-clock"></i></span>
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

        <div className="events-carousel-controls">
          <button className="carousel-btn nav-left">&larr;</button>
          <button className="carousel-btn nav-right">&rarr;</button>
        </div>

        {loading ? (
          <div className="loading-events">Loading events...</div>
        ) : (
          <div className="events-cards-container">
            {events.map(event => (
              <EventsCard event={event} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default EventsCalendar;