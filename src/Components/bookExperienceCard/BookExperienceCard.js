import React, { useState, useEffect } from 'react';
import './BookExperienceCard.css';
import bookingImg from "../Images/bookingImg.jpg";
import CustomButton from '../common/CustomButton';

const datafromHome = {
  title: "Book Your Experience",
  subtitle: "Witness the excellence of Arabian horse racing at Anfa Racecourse, Casablanca",
};

const data = {
  title: "Morocco Stage2026",
  subtitle: "Witness the excellence of Arabian horse racing at Anfa Racecourse, Casablanca",
  date: "30 apr, 2025",
  country: "Morocco"
};

function BookExperienceCard(props) {
  const [cardData, setCardData] = useState({});

  useEffect(() => {
    if (props.from === "home") {
      setCardData(datafromHome);
    } else {
      setCardData(data);
    }
  }, [props.from]);

  const handleBookExperience = () => {
  }

  return (
    <div className="book-experience-card">
      <img className="booking-img" src={bookingImg} alt="booking img" />
      <div className="book-experience-card-content">
        {props.from === "home" && (
          <div className="book-experience-badge">UAE PRESIDENT CUP</div>
        )}
        <h1 className="book-experience-card-header">
          {cardData.title && cardData.title.split(' ').map((part, index, array) => (
            <React.Fragment key={index}>
              {part}
              {index < array.length - 1 && <br />}
            </React.Fragment>
          ))}
        </h1>
        <p className="book-experience-card-text">{cardData.subtitle}</p>

        {props.from !== "home" && (
          <div className="book-experience-details">
            <div className="experience-detail-item">
              <div className="experience-icon"><i className="fa-regular fa-calendar"></i></div>
              <div className="experience-info">
                <span className="experience-label">Event Date</span>
                <span className="experience-value">{cardData.date}</span>
              </div>
            </div>
            <div className="experience-detail-item">
              <div className="experience-icon"><i className="fa-solid fa-globe"></i></div>
              <div className="experience-info">
                <span className="experience-label">Event Country</span>
                <span className="experience-value">{cardData.country}</span>
              </div>
            </div>
          </div>
        )}

        <CustomButton innerText="Book Experience" onClick={handleBookExperience} />
      </div>
    </div>
  );
}

export default BookExperienceCard;