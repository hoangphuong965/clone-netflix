import React from "react";

function Title({ title, subtitle }) {
  return (
    <div className="container">
      <div className="card-text-container">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
      <div className="card-img-container">
           <img src={} alt=""/>
      </div>
    </div>
  );
}

export default Title;
