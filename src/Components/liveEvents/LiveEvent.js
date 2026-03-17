import React, { useState } from "react";

function LiveEvent() {
  const videos = [
    { id: 1, title: "Video 1", url: "video1.mp4", thumb: "thumb1.jpg" },
    { id: 2, title: "Video 2", url: "video2.mp4", thumb: "thumb2.jpg" },
    { id: 3, title: "Video 3", url: "video3.mp4", thumb: "thumb3.jpg" },
  ];

  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  return (
    <div>
      <h2> Live Event</h2>
      <p>
        Watch the UAE President’s Cup live and enjoy the latest horse racing
        action and highlights.
      </p>
      <div className="video-container">
        <div className="main-player">
          <video key={currentVideo.url} controls width="80%">
            <source src={currentVideo.url} type="video/mp4" />
          </video>
          <h2>{currentVideo.title}</h2>
        </div>
        <div className="thumbnail-sidebar">
          {videos.map((video) => (
            <div
              key={video.id}
              className={`thumbnail-item ${currentVideo.id === video.id ? "active" : ""}`}
              onClick={() => setCurrentVideo(video)}
            >
              <img src={video.thumb} alt={video.title} />
              <p>{video.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LiveEvent;
