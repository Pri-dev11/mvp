import React, { useEffect, useState } from "react";
import newsImage1 from "./../Images/NewsImage1.png";
import newsImage2 from "./../Images/NewsImage2.png";
import newsImage3 from "./../Images/NewsImage3.png";
import "./News.css";

const newsList = [
  {
    image: newsImage1,
    infoDate: "Monday, 25 April 10:41AM",
    heading:
      "Congratulations to the champions of the Moroccan leg of the UAEPresidentCup Series",
    content:
      "The winners were honored by His Excellency Omar Abdulrahman Al Alteneiji, the UAE Consul in Rabat, His Excellency Faisal Al Rahmani, the Secretary-General of the UAE President’s Cup Series Committee for Purebred Arabian Horses, and Omar Al Seqley, the General Manager of the Royal Company for the Encouragement of Horse-Racing.",
  },
  {
    image: newsImage2,
    infoDate: "Monday, 25 April 10:41AM",
    heading:
      "Tomorrow, the Moroccan leg of the #UAEPresidentCup for Purebred Arabian Horses kicks off",
    content:
      "The winners were honored by His Excellency Omar Abdulrahman Al Alteneiji, the UAE Consul in Rabat, His Excellency Faisal Al Rahmani, the Secretary-General of the UAE President’s Cup Series Committee for Purebred Arabian Horses, and Omar Al Seqley, the General Manager of the Royal Company for the Encouragement of Horse-Racing.",
  },
  {
    image: newsImage3,
    infoDate: "Monday, 25 April 10:41AM",
    heading:
      "Congratulations to the champions of the Moroccan leg of the UAEPresidentCup Series",
    content:
      "Tomorrow, the Netherlands hosts the UAE President’s Cup for Arabian Horses.",
  },
  {
    image: newsImage1,
    infoDate: "Monday, 25 April 10:41AM",
    heading:
      "Congratulations to the champions of the Moroccan leg of the UAEPresidentCup Series",
    content:
      "The winners were honored by His Excellency Omar Abdulrahman Al Alteneiji, the UAE Consul in Rabat, His Excellency Faisal Al Rahmani, the Secretary-General of the UAE President’s Cup Series Committee for Purebred Arabian Horses, and Omar Al Seqley, the General Manager of the Royal Company for the Encouragement of Horse-Racing.",
  },
  {
    image: newsImage2,
    infoDate: "Monday, 25 April 10:41AM",
    heading:
      "Tomorrow, the Moroccan leg of the #UAEPresidentCup for Purebred Arabian Horses kicks off",
    content:
      "The winners were honored by His Excellency Omar Abdulrahman Al Alteneiji, the UAE Consul in Rabat, His Excellency Faisal Al Rahmani, the Secretary-General of the UAE President’s Cup Series Committee for Purebred Arabian Horses, and Omar Al Seqley, the General Manager of the Royal Company for the Encouragement of Horse-Racing.",
  },
  {
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
    <>
      <div>News</div>
      <p>Explore and read latest news</p>
      <div className="news-container">
        {newNews.length > 0 &&
          newNews.map((news, index) => (
            <div className="news-card" key={index}>
              <img src={news.image} alt="img" className="news-image"></img>
              <p className="news-date">{news.infoDate}</p>
              <p className="news-heading">{news.heading}</p>
              <p>{news.content}</p>
              <button className="read-more">Read more</button>
            </div>
          ))}
      </div>
    </>
  );
}

export default News;
