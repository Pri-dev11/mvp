import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './NewsDetail.css';

import newsDetail1 from "./../Images/newsDetail1.jpg";

const sampleDetail = {
  title: "BURAAK Claims Victory in Thrilling Morocco Stage Finale",
  subTitle: "UAE President Cup Series Crowns Champions at Casablanca's Historic Anfa Racecourse",
  author: "Sarah Al-Mansouri",
  authorImg: "",
  date: "2023-10-01",
  minRead: 6,
  timeStamp: "2023-10-01T14:30:00Z",
  description: "Congratulations to the champions of the Moroccan leg of the UAEPresidentCup Series",
  contentHeader: "Congratulations to the champions of the Moroccan leg of the UAEPresidentCup Series",
  titleImage: newsDetail1,
  content: `The winners were honored by His Excellency Omar Abdulrahman Al Alteneiji, the UAE Consul in Rabat, His Excellency Faisal Al Rahmani, the Secretary-General of the UAE President’s Cup Series Committee for Purebred Arabian Horses, and Omar Al Seqley, the General Manager of the Royal Company for the Encouragement of Horse-Racing.\nThe distinguished winners were celebrated in a formal ceremony officiated by His Excellency Omar Abdulrahman Al Alteneiji, the UAE Consul in Rabat, who represents the UAE's diplomatic interests in Morocco. They were joined by His Excellency Faisal Al Rahmani, the Secretary-General of the UAE President’s Cup Series Committee for Purebred Arabian Horses, an organization dedicated to promoting and preserving the heritage of Arabian horse racing, which is deeply embedded in the culture of the Gulf region. Additionally, Omar Al Seqley, the General Manager of the`
};

function NewsDetail() {
  const { id } = useParams();
  const [newsDetail, setNewsDetail] = useState({});

  useEffect(() => {
    // Fetch news detail from API using newsId and set state
    // const data = fetchNewsDetailById(id); 
    setNewsDetail(sampleDetail);
  }, [id]);

  const handleRaceResultsClick = () => {
    // Navigate to race results page for this news article
  }

  return (
    <div className="news-detail-container">
      <img className="detail-banner" src={newsDetail.titleImage} alt="News Detail" />

      <div className="detail-img-text">
        <Button variant="primary" className="raceResultButton"
          onClick={handleRaceResultsClick} >Race Results </Button>
        <h1 className="detail-header">{newsDetail.title}</h1>
        <p className="detail-subtitle">{newsDetail.subTitle}</p>
        <div className="details-banner-2">
          <div className="detail-meta-item">
            <i className="fa-solid fa-user"></i>
            <span>{newsDetail.author || 'Unknown author'}</span>
          </div>
          <div className="detail-meta-item">
            <i className="fa-regular fa-calendar"></i>
            <span>{newsDetail.date ? new Date(newsDetail.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }) : ''}</span>
          </div>
          <div className="detail-meta-item">
            <i className="fa-solid fa-clock"></i>
            <span>{newsDetail.minRead ? `${newsDetail.minRead} min read` : ''}</span>
          </div>
        </div>
      </div>
      <div className="detail-content">
        <p className="news-date">{newsDetail.date ? new Date(newsDetail.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }) : ''}</p>
        <div className="detail-author-section">
          {newsDetail.authorImg ?
            <img src={newsDetail.authorImg} alt={newsDetail.author} className="author-img" />
            : <i className="fa-solid fa-user author-icon"></i>}
          <div className="author-info">
            <div className="author-by">By <span className="author-name">{newsDetail.author || 'Unknown author'}</span></div>
          </div>
        </div>
        <article className="news-article1">{newsDetail.content}</article>
      </div>
    </div>
  );
}

export default NewsDetail; 