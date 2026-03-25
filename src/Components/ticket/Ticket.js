import React, { useState, useEffect } from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import BookExperienceCard from '../bookExperienceCard/BookExperienceCard'
import CustomButton from '../common/CustomButton';
import "./Ticket.css"

const mockEvents = [
  { id: 1, remainingDays: 7, title: "Moroccan leg of the UAEPresidentCup Series", country: "Morocco", date: "30 apr, 2025" },
  { id: 2, remainingDays: 31, title: "Moroccan leg of the UAEPresidentCup Series", country: "Morocco", date: "30 may, 2025" },
  { id: 3, remainingDays: 50, title: "Moroccan leg of the UAEPresidentCup Series", country: "Morocco", date: "3 jun, 2025" },
];


function Ticket() {

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setEvents(mockEvents);
  })

  const handleBookExperience = () => {

  }

  return (
    <div className="ticket-container">
      <BookExperienceCard />

      <Row className="ticket-cards-grid g-4 px-4 pb-5">
        {events.map((event) => (
          <Col md={6} key={event.id}>
            <Card className="ticket-card">
              <Card.Body className="ticket-body">
                <Card.Title className="mb-4">{event.title}</Card.Title>
                <Card.Text className='ticket-details mb-4'>
                  <div className="ticket-item">
                    <span className="ticket-icon"><i className="fa-solid fa-globe"></i></span>
                    <div className="ticket-text">
                      <span className="ticket-label">Event Country</span>
                      <span className="ticket-value">{event.country}</span>
                    </div>
                  </div>
                  <div className="ticket-item">
                    <span className="ticket-icon"><i className="fa-regular fa-calendar"></i></span>
                    <div className="ticket-text">
                      <span className="ticket-label">Event Date</span>
                      <span className="ticket-value">{event.date}</span>
                    </div>
                  </div>
                </Card.Text>
                <div className="text-center w-100 mt-2">
                  <CustomButton innerText="Book Experience" onClick={handleBookExperience} />
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Ticket