import React from "react";
import TextAnimation from "../components/TextAnimation";
import devicePile from "../images/device-pile.png";
import videoDevices from "../images/video-devices.m4v";

function Watch() {
  return (
    <div className="watch">
      <TextAnimation className="haha"
        title="Enjoy on your TV."
        subtitle="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        img_animation={devicePile}
        video_animation={videoDevices}
      />
    </div>
  );
}

export default Watch;
