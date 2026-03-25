import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/header/Header";
import Home from "./Components/home/Home";
import About from "./Components/about/About";
import NewsDetail from "./Components/newsDetail/NewsDetail";
import Events from "./Components/events/Events";
import News from "./Components/news/News";
import HorsesAndPeople from "./Components/horsesAndPeople/HorsesAndPeople";
import Ticket from "./Components/ticket/Ticket";
import Gallery from "./Components/gallery/Gallery";
import RaceDetail from "./Components/raceDetail/RaceDetail";
import Footer from "./Components/footer/Footer";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/events" element={<Events />} />
            <Route path="/horsesAndPeople" element={<HorsesAndPeople />} />
            <Route path="/ticket" element={<Ticket />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/raceDetail" element={<RaceDetail />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
