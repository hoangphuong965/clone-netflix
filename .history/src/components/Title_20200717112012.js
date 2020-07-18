import React from "react";

function Title({ title, subtitle }) {
  return (
    <div className="container">
      <div className="card-text-container">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
      <div className="card-img-container">
           <div className="card-animation-container">
                <img src="" alt=""/>
                <div className="card-animation">
                     
                </div>
           </div>
      </div>
    </div>
  );
}

export default Title;
