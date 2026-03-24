import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/header/Header";
import Home from "./Components/home/Home";
import About from "./Components/about/About";
import NewsDetail from "./Components/newsDetail/NewsDetail";
// import Events from "./Components/home/Events";
import News from "./Components/news/News";

// import Gallery from "./Components/home/Gallery";
// import Contact from "./Components/home/Contact";
// import FAQ from "./Components/home/FAQ";
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
            {/* <Route path="/gallery" element={<Gallery />} />
            <Route path="/events" element={<EventsAndRaces />} /> 
            <Route path="/ticket" element={<Ticket />} />
            <Route path="/horsesAndPeople" element={<HorsesAndPeople />} /> */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
