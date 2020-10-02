import React from "react";
import TextAnimation from "./TextAnimation";
import mobile from "../images/mobile-0819.jpg";
import boxshot from "../images/boxshot.png";
import downloadIcon from "../images/download-icon.gif";

function Download() {
  return (
    <div className="download">
      <TextAnimation
        title="Download your shows to watch offline."
        subtitle="Save your favorites easily and always have something to watch."
        video_animation={}
        img_animation={}
      />
    </div>
  );
}

export default Download;
