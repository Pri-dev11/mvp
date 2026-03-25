import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import BookExperienceCard from "../bookExperienceCard/BookExperienceCard";
import News from "../news/News";
import stage from "../Images/stage.png";
import jockey from "../Images/jockey1.png"
import "./RaceDetail.css";

const stageData = {
  title: "Morocco Stage",
  trackName: "Anfa Sand Track - Casablanca",
  details: [
    { label: "Category", value: "Group 3" },
    { label: "Distance", value: "2100 meters" },
    { label: "Age", value: "4 years and above" },
    { label: "Total Prize Money", value: "€ 250,000" }
  ],
  weights: [
    { label: "4 years", value: "45kg" },
    { label: "5 years and above", value: "58kg" }
  ],
  imageURL: stage
};

const horseEntries = [
  { id: 1, rank: 1, name: "2 AL LAITH (AE)", owner: "Victorious", trainer: "Fawzi Nass", jockey: "Tadhg O'Shea", weight: "80kg", earning: "33750", dob: "25/10/2021", imageURL: jockey },
  { id: 2, rank: 2, name: "2 AL LAITH (AE)", owner: "Victorious", trainer: "Fawzi Nass", jockey: "Tadhg O'Shea", weight: "80kg", earning: "33750", dob: "25/10/2021", imageURL: jockey },
  { id: 3, rank: 3, name: "2 AL LAITH (AE)", owner: "Victorious", trainer: "Fawzi Nass", jockey: "Tadhg O'Shea", weight: "80kg", earning: "33750", dob: "25/10/2021", imageURL: jockey },
  { id: 4, rank: 4, name: "2 AL LAITH (AE)", owner: "Victorious", trainer: "Fawzi Nass", jockey: "Tadhg O'Shea", weight: "80kg", earning: "33750", dob: "25/10/2021", imageURL: jockey },
  { id: 5, rank: 5, name: "2 AL LAITH (AE)", owner: "Victorious", trainer: "Fawzi Nass", jockey: "Tadhg O'Shea", weight: "80kg", earning: "33750", dob: "25/10/2021", imageURL: jockey },
];

function RaceDetail() {
  return (
    <div className="race-detail-container">
      <Container className="py-5 mt-5">
        <div className="text-center mb-5">
          <h1 className="race-detail-title">{stageData.title}</h1>
          <div className="marocco-flag mt-2">
            <span className="flag-icon">🇲🇦</span>
          </div>
        </div>

        <Row className="mb-5 align-items-stretch">
          <Col lg={5} className="mb-4 mb-lg-0">
            <Card className="stage-info-card h-100 shadow-sm border-0">
              <Card.Body className="p-4 p-md-5">
                <h3 className="track-name mb-4">{stageData.trackName}</h3>

                <div className="info-list mb-5">
                  {stageData.details.map((item, idx) => (
                    <div key={idx} className="info-item d-flex justify-content-start mb-3">
                      <span className="info-label text-muted">{item.label} :</span>
                      <span className="info-value fw-bold">{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="divider mb-4"></div>

                <h4 className="weight-title mb-4">Assigned Weight</h4>
                <div className="weight-list">
                  {stageData.weights.map((item, idx) => (
                    <div key={idx} className="weight-item d-flex justify-content-start mb-2">
                      <span className="weight-label text-muted">{item.label} :</span>
                      <span className="weight-value fw-bold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={7}>
            <div className="map-container h-100 shadow-sm rounded-4 overflow-hidden border">
              <img src={stageData.imageURL} alt="stage" />
            </div>
          </Col>
        </Row>

        <div className="divider-full mb-5"></div>

        <div className="horse-entries-list mb-5">
          {horseEntries.map((horse) => (
            <div key={horse.id} className="horse-entry-card p-3 px-md-5 d-flex align-items-center">
              <div className="rank-badge me-5 d-flex align-items-center justify-content-center text-white">
                {horse.rank}
              </div>
              <div className="jockey-silks me-5">
                <img src={horse.imageURL} alt="horseImage" />
              </div>
              <Row className="flex-grow-1 gy-3">
                <Col md={3}>
                  <div className="horse-name-id h5 mb-0 fw-bold">{horse.name}</div>
                </Col>
                <Col md={3}>
                  <div className="staff-details">
                    <p className="mb-1 text-muted">Owner : <span className="fw-bold text-dark">{horse.owner}</span></p>
                    <p className="mb-1 text-muted">Trainer : <span className="fw-bold text-dark">{horse.trainer}</span></p>
                    <p className="mb-0 text-muted">Jockey : <span className="fw-bold text-dark">{horse.jockey}</span></p>
                  </div>
                </Col>
                <Col md={6} className="text-md-end">
                  <div className="staff-details">
                    <p className="mb-1 text-muted">Weight Earning : <span className="fw-bold text-dark">{horse.weight} - {horse.earning}</span></p>
                    <p className="mb-1 text-muted">Date of Birth : <span className="fw-bold text-dark">{horse.dob}</span></p>
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        </div>
      </Container>

      <BookExperienceCard />
      <News />
    </div>
  );
}

export default RaceDetail;
