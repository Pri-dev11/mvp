import React, { useEffect, useState } from "react";
import { Container, Card, Col, Row, Button } from 'react-bootstrap';

import newsImage1 from "./../Images/NewsImage1.png";
import newsImage2 from "./../Images/NewsImage2.png";
import newsImage3 from "./../Images/NewsImage3.png";
import "./News.css";

const newsList = [
  {
    newsId: 1,
    image: newsImage1,
    infoDate: "Monday, 25 April 10:41AM",
    heading:
      "Congratulations to the champions of the Moroccan leg of the UAEPresidentCup Series",
    content:
      "The winners were honored by His Excellency Omar Abdulrahman Al Alteneiji, the UAE Consul in Rabat, His Excellency Faisal Al Rahmani, the Secretary-General of the UAE President’s Cup Series Committee for Purebred Arabian Horses, and Omar Al Seqley, the General Manager of the Royal Company for the Encouragement of Horse-Racing.",
  },
  {
    newsId: 2,
    image: newsImage2,
    infoDate: "Monday, 25 April 10:41AM",
    heading:
      "Tomorrow, the Moroccan leg of the #UAEPresidentCup for Purebred Arabian Horses kicks off",
    content:
      "The winners were honored by His Excellency Omar Abdulrahman Al Alteneiji, the UAE Consul in Rabat, His Excellency Faisal Al Rahmani, the Secretary-General of the UAE President’s Cup Series Committee for Purebred Arabian Horses, and Omar Al Seqley, the General Manager of the Royal Company for the Encouragement of Horse-Racing.",
  },
  {
    newsId: 3,
    infoDate: "Monday, 25 April 10:41AM",
    heading:
      "Congratulations to the champions of the Moroccan leg of the UAEPresidentCup Series",
    content:
      "Tomorrow, the Netherlands hosts the UAE President’s Cup for Arabian Horses.",
  },
  {
    newsId: 4,
    image: newsImage1,
    infoDate: "Monday, 25 April 10:41AM",
    heading:
      "Congratulations to the champions of the Moroccan leg of the UAEPresidentCup Series",
    content:
      "The winners were honored by His Excellency Omar Abdulrahman Al Alteneiji, the UAE Consul in Rabat, His Excellency Faisal Al Rahmani, the Secretary-General of the UAE President’s Cup Series Committee for Purebred Arabian Horses, and Omar Al Seqley, the General Manager of the Royal Company for the Encouragement of Horse-Racing.",
  },
  {
    newsId: 5,
    infoDate: "Monday, 25 April 10:41AM",
    heading:
      "Tomorrow, the Moroccan leg of the #UAEPresidentCup for Purebred Arabian Horses kicks off",
    content:
      "The winners were honored by His Excellency Omar Abdulrahman Al Alteneiji, the UAE Consul in Rabat, His Excellency Faisal Al Rahmani, the Secretary-General of the UAE President’s Cup Series Committee for Purebred Arabian Horses, and Omar Al Seqley, the General Manager of the Royal Company for the Encouragement of Horse-Racing.",
  },
  {
    newsId: 6,
    image: newsImage3,
    infoDate: "Monday, 25 April 10:41AM",
    heading:
      "Congratulations to the champions of the Moroccan leg of the UAEPresidentCup Series",
    content:
      "Tomorrow, the Netherlands hosts the UAE President’s Cup for Arabian Horses.",
  },
];

function News(props) {
  const [newNews, setNewNews] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    setNewNews(newsList);
    props.value === "home" ? setShowMore(true) : setShowMore(false);
  }, [props.value]);

  return (
    <div className="news-container">
      <div className="news-header">News</div>
      <div className="news-title-text">Explore and read latest news</div>
      <div className="news-card-container">
        <Row lg={4} md={4} sm={6} xs={12} className='g-4'>
          {newNews.length > 0 &&
          newNews.map((news) => (
            <Col key={news.newsId} lg={4} md={4} sm={6} className="mb-4">
              <Card className="news-card">
                <Card.Img className="news-image" variant="top" src={news.image} />
                <Card.Body>
                   <p className="news-date">{news.infoDate}</p>
                  <Card.Title>{news.heading}</Card.Title>
                  <Card.Text>{news.content}</Card.Text>
                  <Button className="read-more">Read more <i class="right-arrow"></i>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default News;
