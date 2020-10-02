import React from 'react'
import TextAnimation from "../components/TextAnimation";
import mobile from "../images/mobile-0819.jpg";
import boxshot from "../images/boxshot.png";
import downloadIcon from "../images/download-icon.gif";

function Download () {
     return (
       <div className="download">
         <TextAnimation
           title="Enjoy on your TV."
           subtitle="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
           img_animation={}
           video_animation={video}
         />
       </div>
     );
}

export default Download 
