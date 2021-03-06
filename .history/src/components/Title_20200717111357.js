import React from "react";

function Title({ title, subtitle }) {
  return (
    <div className="container">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
}

export default Title;
