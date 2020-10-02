import React from "react";
import mobile from "../images/mobile-0819.jpg";
import boxshot from "../images/boxshot.png";

function Download() {
  return (
    <div className="download">
      <TextAnimation
        title="Download your shows to watch offline."
        subtitle="Save your favorites easily and always have something to watch."
        img_animation={mobile}
        boxshot={boxshot}
      />
    </div>
  );
}

export default Download;
