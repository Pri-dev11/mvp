import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { connect } from "react-redux";
import { fetchPastEvents } from '../../Redux/Actions';
import './Winners.css';

import jockey1 from "../Images/jockey1.png"

function Winners(props) {
  const [winners, setWinners] = useState([]);

  useEffect(() => {
    props.fetchPastEvents();
  }, []);

  useEffect(() => {
    if (props.pastEvents && Array.isArray(props.pastEvents.data)) {
      setWinners(props.pastEvents.data);
    }
  }, [props.pastEvents])

  if (props.loading) {
    return (
      <Container className="winners-container py-5 text-center">
        <Spinner animation="border" variant="primary" />
        <p className="mt-3">Loading winners...</p>
      </Container>
    );
  }

  if (props.error) {
    return (
      <Container className="winners-container py-5 text-center">
        <h2 className="winners-page-title mb-4">Winners of the Race</h2>
        <div className="text-danger fw-bold">Something went wrong!!</div>
        <p className="text-muted">{props.error}</p>
      </Container>
    );
  }

  return (
    <Container className="winners-container py-5">
      <h2 className="winners-page-title text-center mb-5">Winners of the Race</h2>
      <Row className="g-4">
        {winners && winners.map((winner) => (
          <Col lg={4} md={6} sm={12} key={winner._id}>
            <Card className="winner-card h-100">
              <Card.Body>
                <div className="winner-card-title text-center">
                  {winner.name}
                </div>

                <div className="winner-stats-row text-center my-3">
                  <span className="winner-stat">
                    <i className="fa-regular fa-clock"></i> {winner.time}
                  </span>
                  <span className="winner-stat ms-4">
                    <i className="fa-solid fa-road"></i> {winner.distance ? winner.distance : "-"}
                  </span>
                </div>

                <div className="winner-details-container mt-4">
                  <div className="winner-roles">
                    <div className="role-item">
                      <div className="role-icon"><img className="role-icon-img" src={jockey1} alt="jockey" /></div>
                      <div className="role-info">
                        <span className="role-label">Jockey</span>
                        <span className="role-name">{winner.winner?.jockey?.name}</span>
                      </div>
                    </div>

                    <div className="role-item">
                      <div className="role-icon"><i className="fa-solid fa-horse-head"></i></div>
                      <div className="role-info">
                        <span className="role-label">Trainer</span>
                        <span className="role-name">{winner.winner?.trainer?.name}</span>
                      </div>
                    </div>

                    <div className="role-item">
                      <div className="role-icon"><i className="fa-solid fa-user-tie"></i></div>
                      <div className="role-info">
                        <span className="role-label">Owner</span>
                        <span className="role-name">{winner.winner?.owner?.name}</span>
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

const mapStateToProps = (state) => ({
  pastEvents: state.pastEvents.data,
  loading: state.pastEvents.loading,
  error: state.pastEvents.error,
});

const mapDispatchToProps = {
  fetchPastEvents,
};

export default connect(mapStateToProps, mapDispatchToProps)(Winners);