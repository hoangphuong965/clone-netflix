import React from "react";

function Title({ title, subtitle, imga_nimation}) {
  return (
    <div className="container">
      <div className="card-text-container">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
      <div className="card-img-container">
           <div className="card-animation-container">
                <img src={img-animation} alt=""/>
                <div className="card-animation">
                     <video src={}></video>
                </div>
           </div>
      </div>
    </div>
  );
}
export default Title;
