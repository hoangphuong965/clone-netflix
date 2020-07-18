import React from "react";
import TextAnimation from "../components/TextAnimation";
import tv from "../images/tv.png";
import video from "../imag";

function Enjoy() {
  return (
    <div className="enjoy">
      <TextAnimation
        title="Enjoy on your TV."
        subtitle="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        img_animation={tv}
        video_animation={video}
      />
    </div>
  );
}

export default Enjoy;
