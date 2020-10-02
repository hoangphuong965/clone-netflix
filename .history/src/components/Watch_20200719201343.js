import React from "react";
import TextAnimation from "../components/TextAnimation";
import devicePile from "../images/device-pile.png";
import videoDevices from "../images/video-devices.m4v";

function Watch() {
  return (
    <div>
      <TextAnimation
        title="Enjoy on your TV."
        subtitle="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        video_animation={video}
      />
    </div>
  );
}

export default Watch;
