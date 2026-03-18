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
     
    </div>
  );
}

export default LiveEvent;
