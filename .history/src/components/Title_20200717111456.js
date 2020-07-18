import React from "react";

function Title({ title, subtitle }) {
  return (
    <div className="container">
      <div className="card-text">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
      <div className="card-img">
           
      </div>
    </div>
  );
}

export default Title;
