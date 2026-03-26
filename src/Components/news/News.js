import React, { useEffect, useState } from "react";
import { Card, Col, Row } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchNewsList } from "../../Redux/Actions";
import CustomButton from "../common/CustomButton";
import "./News.css";


const PAGE_SIZE = 3;

function News(props) {
  const { fetchNewsList, newsList, loading, error } = props;
  const [newNews, setNewNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchNewsList();
  }, []);

  useEffect(() => {
    console.log("response", newsList.data);

    if (newsList.data && newsList.data.length > 0) {
      setNewNews(newsList.data);
    } else if (!loading && !error && newsList.length === 0) {
      setNewNews([]);
    }
  }, [newsList, loading, error]);

  useEffect(() => {
    setCurrentPage(0);
  }, [props.value, props.from]);

  const isNewsPage = location.pathname === '/news';
  const totalPages = Math.ceil(newNews.length / PAGE_SIZE);
  const visibleNews = isNewsPage
    ? newNews
    : newNews.slice(currentPage * PAGE_SIZE, currentPage * PAGE_SIZE + PAGE_SIZE);

  const handleNewsContent = (news) => {
    navigate(`/news/${news._id}`, { state: { newsDetail: news } })
  }

  const renderCard = (news) => (
    <Card className="news-card h-100">
      <Card.Img className="news-image" variant="top" src={news.image} />
      <Card.Body className="position-relative">
        <div className="news-date-pill-container">
          <span className="news-date-pill">
            {news.date ? new Date(news.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) : ''}
          </span>
        </div>
        <Card.Title className="fw-bold news-title">{news.title}</Card.Title>
        <Card.Text className="news-content" dangerouslySetInnerHTML={{ __html: news.content }}>
        </Card.Text>
        <div className="read-more">
          <CustomButton innerText="Read more" onClick={() => handleNewsContent(news)} />
        </div>
      </Card.Body>
    </Card>
  );

  return (
    <div className="news-container mt-5 pt-3">
      <div className="news-header-row">
        <div className="news-header-text">
          <div className="news-header">News</div>
          <p className="news-title-text m-0">Explore and read latest news</p>
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

const mapStateToProps = (state) => ({
  newsList: state.news.newsList,
  loading: state.news.loading,
  error: state.news.error,
});

const mapDispatchToProps = {
  fetchNewsList,
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
