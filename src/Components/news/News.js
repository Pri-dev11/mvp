import React, { useEffect, useState } from "react";
import { Card, Col, Row } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';

import newsImage1 from "./../Images/NewsImage1.png";
import newsImage2 from "./../Images/NewsImage2.png";
import newsImage3 from "./../Images/NewsImage3.png";
import "./News.css";
import CustomButton from "../common/CustomButton";

const newsList = [
  {
    newsId: 1,
    image: newsImage1,
    infoDate: "Monday, 25 April 10:41AM",
    heading: "Congratulations to the champions of the Moroccan leg of the UAEPresidentCup Series",
    content: "The winners were honored by His Excellency Omar Abdulrahman Al Alteneiji, the UAE Consul in Rabat, His Excellency Faisal Al Rahmani, the Secretary-General of the UAE President's Cup Series Committee for Purebred Arabian Horses, and Omar Al Seqley, the General Manager of the Royal Company for the Encouragement of Horse-Racing.",
  },
  {
    newsId: 2,
    image: newsImage2,
    infoDate: "Monday, 25 April 10:41AM",
    heading: "Tomorrow, the Moroccan leg of the #UAEPresidentCup for Purebred Arabian Horses kicks off",
    content: "The winners were honored by His Excellency Omar Abdulrahman Al Alteneiji, the UAE Consul in Rabat, His Excellency Faisal Al Rahmani, the Secretary-General of the UAE President's Cup Series Committee for Purebred Arabian Horses, and Omar Al Seqley, the General Manager of the Royal Company for the Encouragement of Horse-Racing.",
  },
  {
    newsId: 3,
    image: newsImage3,
    infoDate: "Monday, 25 April 10:41AM",
    heading: "Congratulations to the champions of the Moroccan leg of the UAEPresidentCup Series",
    content: "Tomorrow, the Netherlands hosts the UAE President's Cup for Arabian Horses.",
  },
  {
    newsId: 4,
    image: newsImage1,
    infoDate: "Monday, 25 April 10:41AM",
    heading: "2ndekwheh Congratulations to the champions of the Moroccan leg of the UAEPresidentCup Series",
    content: "The winners were honored by His Excellency Omar Abdulrahman Al Alteneiji, the UAE Consul in Rabat, His Excellency Faisal Al Rahmani, the Secretary-General of the UAE President's Cup Series Committee for Purebred Arabian Horses, and Omar Al Seqley, the General Manager of the Royal Company for the Encouragement of Horse-Racing.",
  },
  {
    newsId: 5,
    image: newsImage2,
    infoDate: "Monday, 25 April 10:41AM",
    heading: "2nd ijduiydTomorrow, the Moroccan leg of the #UAEPresidentCup for Purebred Arabian Horses kicks off",
    content: "The winners were honored by His Excellency Omar Abdulrahman Al Alteneiji, the UAE Consul in Rabat, His Excellency Faisal Al Rahmani, the Secretary-General of the UAE President's Cup Series Committee for Purebred Arabian Horses, and Omar Al Seqley, the General Manager of the Royal Company for the Encouragement of Horse-Racing.",
  },
  {
    newsId: 6,
    image: newsImage3,
    infoDate: "Monday, 25 April 10:41AM",
    heading: "2nd yguewub Congratulations to the champions of the Moroccan leg of the UAEPresidentCup Series",
    content: "Tomorrow, the Netherlands hosts the UAE President's Cup for Arabian Horses.",
  },
];

const PAGE_SIZE = 3;

function News(props) {
  const [newNews, setNewNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setNewNews(newsList);
    setCurrentPage(0);
  }, [props.value, props.from]);

  const isNewsPage = location.pathname === '/news';
  const totalPages = Math.ceil(newNews.length / PAGE_SIZE);
  const visibleNews = isNewsPage
    ? newNews
    : newNews.slice(currentPage * PAGE_SIZE, currentPage * PAGE_SIZE + PAGE_SIZE);

  const renderCard = (news) => (
    <Card className="news-card h-100">
      <Card.Img className="news-image" variant="top" src={news.image} />
      <Card.Body className="position-relative">
        <div className="news-date-pill-container">
          <span className="news-date-pill">{news.infoDate}</span>
        </div>
        <Card.Title className="fw-bold">{news.heading}</Card.Title>
        <Card.Text className="news-content">{news.content}</Card.Text>
        <div className="read-more">
          <CustomButton innerText="Read more" onClick={() => navigate(`/news/${news.newsId}`)} />
        </div>
      </Card.Body>
    </Card>
  );

  return (
    <div className="news-container mt-5 pt-3">
      <div className="news-header-row">
        <div className="news-header-text">
          <div className="news-header">News</div>
          <p className="news-title-text m-0 text-muted">Explore and read latest news</p>
        </div>
        {!isNewsPage && totalPages > 1 && (
          <div className="news-carousel-controls">
            <button
              className="carousel-control-btn"
              onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
              disabled={currentPage === 0}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button
              className="carousel-control-btn"
              onClick={() => setCurrentPage(p => Math.min(totalPages - 1, p + 1))}
              disabled={currentPage === totalPages - 1}
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        )}
      </div>

      <div className="news-card-container">
        <Row className="g-4 w-100">
          {visibleNews.map((news) => (
            <Col key={news.newsId} lg={4} md={4} sm={6} xs={12}>
              {renderCard(news)}
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default News;
