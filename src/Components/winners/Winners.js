import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Winners.css';

import jockey1 from "../Images/jockey1.png"
import jockey2 from "../Images/jockey2.png"

// Mock API data
const mockWinnersData = [
  {
    id: 1,
    title: "Moroccan leg of the UAEPresidentCup Series",
    time: "02:21:43",
    distance: "2,000 Km",
    jockey: "Talat",
    trainer: "Kayle",
    owner: "Alii",
    jocImg: jockey1,
    jerseyColor: "#f7d825" // Yellowish
  },
  {
    id: 2,
    title: "Moroccan leg of the UAEPresidentCup Series",
    time: "02:21:43",
    distance: "2,000 Km",
    jockey: "Talat",
    trainer: "Kayle",
    owner: "Alii",
    jocImg: jockey1,
    jerseyColor: "#ffffff" // White
  },
  {
    id: 3,
    title: "Moroccan leg of the UAEPresidentCup Series",
    time: "02:21:43",
    distance: "2,000 Km",
    jockey: "Talat",
    trainer: "Kayle",
    owner: "Alii",
    jocImg: jockey1,
    jerseyColor: "#0be04b" // Green
  },
  {
    id: 4,
    title: "Moroccan leg of the UAEPresidentCup Series",
    time: "02:21:43",
    distance: "2,000 Km",
    jockey: "Talat",
    trainer: "Kayle",
    owner: "Alii",
    jocImg: jockey2,
    jerseyColor: "#22d415" // Green variants
  },
  {
    id: 5,
    title: "Moroccan leg of the UAEPresidentCup Series",
    time: "02:21:43",
    distance: "2,000 Km",
    jockey: "Talat",
    trainer: "Kayle",
    owner: "Alii",
    jocImg: jockey2,
    jerseyColor: "#e0e0e0" // Gray/white
  },
  {
    id: 6,
    title: "Moroccan leg of the UAEPresidentCup Series",
    time: "02:21:43",
    distance: "2,000 Km",
    jockey: "Talat",
    trainer: "Kayle",
    owner: "Alii",
    jocImg: jockey2,
    jerseyColor: "#e03422" // Red variants
  }
];

function Winners() {
  const [winners, setWinners] = useState([]);

  useEffect(() => {
    // Simulate API fetch delay
    const fetchData = async () => {
      // In a real scenario, this would be an axios/fetch call
      setTimeout(() => {
        setWinners(mockWinnersData);
      }, 500);
    };

    fetchData();
  }, []);

  return (
    <Container className="winners-container py-5">
      <h2 className="winners-page-title text-center mb-5">Winners of the Race</h2>
      <Row className="g-4">
        {winners.map((winner) => (
          <Col lg={4} md={6} sm={12} key={winner.id}>
            <Card className="winner-card h-100">
              <Card.Body>
                <div className="winner-card-title text-center">
                  {winner.title.split('UAEPresidentCup').map((part, index, array) => (
                    <React.Fragment key={index}>
                      {part}
                      {index === 0 && array.length > 1 && <><br />UAEPresidentCup</>}
                    </React.Fragment>
                  ))}
                </div>

                <div className="winner-stats-row text-center my-3">
                  <span className="winner-stat">
                    <i className="fa-regular fa-clock"></i> {winner.time}
                  </span>
                  <span className="winner-stat ms-4">
                    <i className="fa-solid fa-road"></i> {winner.distance}
                  </span>
                </div>

                <div className="winner-details-container mt-4">
                  <div className="winner-jockey-img-container">
                    <img className="jockey-shirt-placeholder" src={winner.jocImg} alt="jockey" />
                  </div>

                  <div className="winner-roles">
                    <div className="role-item">
                      <div className="role-icon"><i className="fa-solid fa-user-ninja"></i></div>
                      <div className="role-info">
                        <span className="role-label">Jockey</span>
                        <span className="role-name">{winner.jockey}</span>
                      </div>
                    </div>

                    <div className="role-item">
                      <div className="role-icon"><i className="fa-solid fa-horse-head"></i></div>
                      <div className="role-info">
                        <span className="role-label">Trainer</span>
                        <span className="role-name">{winner.trainer}</span>
                      </div>
                    </div>

                    <div className="role-item">
                      <div className="role-icon"><i className="fa-solid fa-user-tie"></i></div>
                      <div className="role-info">
                        <span className="role-label">Owner</span>
                        <span className="role-name">{winner.owner}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Winners;