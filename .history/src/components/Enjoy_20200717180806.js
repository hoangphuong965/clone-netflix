import React from "react";
import TextAnimation from "../components/TextAnimation";
import tv from '../images/tv.png';
import video from "../images/video-tv-0819.m4v";

function Enjoy() {

  return (
    <div>
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
