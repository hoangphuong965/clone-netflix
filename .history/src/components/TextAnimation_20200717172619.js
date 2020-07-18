import React from "react";

function TextAnimation({ title, subtitle, img_animation, video_animation }) {
  return (
    <div className="container">
      <div className="card-container">
        <div className="card-text-container">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
        <div className="card-img-container">
          <div className="card-animation-container">
            <img src={img_animation} alt="" />
            <div className="card-animation">
              <video src={video_animation}></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TextAnimation;
