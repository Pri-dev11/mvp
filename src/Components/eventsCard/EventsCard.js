import React from "react";
import "./EventsCard.css"

function EventsCard(props) {
  const event = props.event
  return (
    <div key={event.id} className="event-card">
      <div className="event-badge">{event.remainingDays} Days remaining</div>
      <h3 className="event-title">
        {event.title && event.title.split('UAEPresidentCup').map((part, i) => (
          <React.Fragment key={i}>
            {part}
            {i === 0 && <React.Fragment><br />UAEPresidentCup</React.Fragment>}
          </React.Fragment>
        ))}
      </h3>
      <div className="event-details">
        <div className="event-detail-item">
          <span className="detail-icon"><i class="fa-solid fa-globe"></i></span>
          <div className="detail-text">
            <span className="detail-label">Event Country</span>
            <span className="detail-value">{event.country}</span>
          </div>
        </div>
        <div className="event-detail-item">
          <span className="detail-icon"><i className="fa-regular fa-calendar"></i></span>
          <div className="detail-text">
            <span className="detail-label">Event Date</span>
            <span className="detail-value">{event.date}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventsCard;