import React from "react";
import TextAnimation from "./TextAnimation";
// import mobile from "../images/mobile-0819.jpg";
// import boxshot from "../images/boxshot.png";
import downloadIcon from "../images/download-icon.gif";

function Download() {
  return (
    <div className="download">
      <TextAnimation
        title="Watch everywhere."
        subtitle="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
        img_animation={downloadIcon}  
      />
    </div>
  );
}

export default Download;
