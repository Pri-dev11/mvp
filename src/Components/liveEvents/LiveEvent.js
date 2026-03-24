import React, { useEffect, useState } from "react";
import "./LiveEvents.css";

const videos = [
  { id: 1, title: "Moroccan Leg of the #UAEPresidentCup for Purebred Arabian Horses", url: "https://www.youtube.com/watch?v=W7zaIRmth6M", thumb: "thumb1.jpg" },
  { id: 2, title: "UAE President’s Cup 2026 - Highlights Day 1", url: "https://youtu.be/W7zaIRmth6M", thumb: "thumb2.jpg" },
  { id: 3, title: "Training Session: Behind the Scenes", url: "https://youtu.be/W7zaIRmth6M", thumb: "thumb3.jpg" },
  { id: 4, title: "Training Session: Behind the Scenes", url: "https://youtu.be/W7zaIRmth6M", thumb: "thumb4.jpg" },
];

const getYoutubeId = (url) => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

function LiveEvent() {
  const [allVideoList, setAllVideoList] = useState([]);
  const [currentVideo, setCurrentVideo] = useState({});
  const [videoList, setVideoList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //API to fetch all the videos
    setLoading(false);
    setAllVideoList(videos);
  }, []);

  useEffect(() => {
    if (allVideoList.length > 0 && !currentVideo.id) {
      handleVideoSelect(allVideoList[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allVideoList]);

  const handleVideoSelect = (video) => {
    setCurrentVideo(video);
    setVideoList(allVideoList.filter((v) => v.id !== video.id));
  };

  return (
    <div className="live-event-section">
      <div className="live-event-header">
        <h2>Live Event</h2>
        <p>
          Watch the UAE President’s Cup live and enjoy the latest horse racing
          action and highlights.
        </p>
      </div>

      <div className="live-video-container">
        <div className="live-video">
          {currentVideo.url ? (
            <iframe
              src={`https://www.youtube.com/embed/${getYoutubeId(currentVideo.url)}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen>
            </iframe>
          ) : null}
        </div>
        <div className="video-list">
          {videoList.map((video) => (
            <div key={video.id} className="video-item" onClick={() => handleVideoSelect(video)}>
              <img src={`https://img.youtube.com/vi/${getYoutubeId(video.url)}/mqdefault.jpg`} alt={video.title} />
              <div className="video-item-overlay">
                <h4>{video.title}</h4>
                <span className="live-badge">Live</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LiveEvent;
