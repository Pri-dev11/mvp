import React from "react";
import { useNavigate } from "react-router-dom";
import "./EventsCard.css"

function EventsCard(props) {
  const navigate = useNavigate();
  const event = props.event

  console.log(event)
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

  return (
    <div key={event._id} className="event-card" onClick={() => navigate('/raceDetail')}>
      <div className="event-badge">{event.remainingDays} Days remaining</div>
      <h3 className="event-title">
        {event.name}
      </h3>
      <div className="event-details">
        <div className="event-detail-item">
          <span className="detail-icon"><i className="fa-solid fa-globe"></i></span>
          <div className="detail-text">
            <span className="detail-label">Event Country</span>
            <div className="detail-value-container">
              <span className="detail-value">{event.country.name}</span>
              <img className="detail-country-flag" src={event.country.flag} alt="flag" />
            </div>
          </div>
        </div>
        <div className="event-detail-item">
          <span className="detail-icon"><i className="fa-regular fa-calendar"></i></span>
          <div className="detail-text">
            <span className="detail-label">Event Date</span>
            <span className="detail-value">{formatDate(event.localStartTime)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventsCard;