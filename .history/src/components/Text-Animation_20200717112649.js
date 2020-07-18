import React from "react";

function Title({ title, subtitle, animation}) {
  return (
    <div className="container">
      <div className="card-text-container">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
      <div className="card-img-container">
           <div className="card-animation-container">
                <img src={animation} alt=""/>
                <div className="card-animation">
                     <video src=""></video>
                </div>
           </div>
      </div>
    </div>
  );
}
export default Title;
