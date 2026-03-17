import React from "react";
import "./Home.css";
import introLogo from "./../Images/introLogo.png";
import LiveEvent from "../liveEvents/LiveEvent";
import News from "../news/News";
import image1 from "./../Images/Img1.png";
import image2 from "./../Images/Img2.png";
import image3 from "./../Images/Img3.png";
import image4 from "./../Images/Img4.png";
import image5 from "./../Images/Img5.png";
import image6 from "./../Images/Img6.png";
import image7 from "./../Images/Img7.png";
import image8 from "./../Images/Img8.png";
import image9 from "./../Images/Img9.png";
import image10 from "./../Images/Img10.png";
import image11 from "./../Images/Img11.png";

function Home() {
  return (
    <div>
      <div>
        <img src={introLogo} alt="Home Banner" className="home-banner" />
      </div>

      <div className="home-conatiner2">
        <img src={image1} alt="1" className="home-container2-image" />
        <img src={image2} alt="2" className="home-container2-image" />
        <img src={image3} alt="3" className="home-container2-image" />
        <img src={image4} alt="4" className="home-container2-image" />
        <img src={image5} alt="5" className="home-container2-image" />
        <img src={image6} alt="6" className="home-container2-image" />
        <img src={image7} alt="7" className="home-container2-image" />
        <img src={image8} alt="8" className="home-container2-image" />
        <img src={image9} alt="9" className="home-container2-image" />
        <img src={image10} alt="10" className="home-container2-image" />
        <img src={image11} alt="11" className="home-container2-image" />
      </div>
      <LiveEvent />
      <News value="home" />
    </div>
  );
}

export default Home;
