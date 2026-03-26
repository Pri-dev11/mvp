import React from 'react'
import { useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './NewsDetail.css';

function NewsDetail() {
  const location = useLocation();
  const newsDetail = location.state?.newsDetail || {};

  const handleRaceResultsClick = () => {
    // Navigate to race results page for this news article
  }

  return (
    <div className="news-detail-container">
      <img className="detail-banner" src={newsDetail.image || newsDetail.titleImage} alt="News Detail" />

      <div className="detail-img-text">
        <Button variant="primary" className="raceResultButton"
          onClick={handleRaceResultsClick} >Race Results </Button>
        <h1 className="detail-header">{newsDetail.title}</h1>
        <p className="detail-subtitle">{newsDetail.subTitle}</p>
        <div className="details-banner-2">
          <div className="detail-meta-item">
            <i className="fa-solid fa-user"></i>
            <span>{newsDetail.authorName || 'Unknown author'}</span>
          </div>
          <div className="detail-meta-item">
            <i className="fa-regular fa-calendar"></i>
            <span>{newsDetail.date ? new Date(newsDetail.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) : ''}</span>
          </div>
          <div className="detail-meta-item">
            <i className="fa-solid fa-clock"></i>
            <span>{newsDetail.minRead ? `${newsDetail.minRead} min read` : ''}</span>
          </div>
        </div>
      </div>
      <div className="detail-content">
        <div className="detail-info-row">
          <div className="detail-author-section">
            {newsDetail.authorImage ?
              <img src={newsDetail.authorImage} alt="author" className="author-img" />
              : <i className="fa-solid fa-user author-icon"></i>}
            <div className="author-info">
              <div className="author-by">By <span className="author-name">{newsDetail.authorName || 'Unknown author'}</span></div>
            </div>
          </div>
          <div className="news-date-pill-container">
            <span className="news-date-pill">{newsDetail.date ? new Date(newsDetail.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) : ''}</span>
          </div>
        </div>
        <article className="news-article1" dangerouslySetInnerHTML={{ __html: newsDetail.content }} />
      </div>
    </div>
  );
}

export default NewsDetail; 