import React from "react";

function TextAnimation({ title, subtitle, img_animation, video_animation }) {
  return (
    <>
      <div className="card">
        <div className="card-container">
          <div className="card-text-container">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
          </div>
          <div className="card-img-container">
            <div className="card-animation-container">
              <img src={img_animation} alt="" />
              <div className="card-animation">
                <video autoPlay playsInline loop className="vidEnjoy vidWatch">
                  <source src={video_animation} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
    </>
  );
}
export default TextAnimation;
