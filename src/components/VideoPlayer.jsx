import React from "react";

const VideoPlayer = () => {
  return (
    <div>
      <video width='800' autoPlay muted loop>
        <source src='/static/WeChat_20240523040119.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
