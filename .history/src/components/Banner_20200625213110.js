import React from "react";
import { Fragment } from "react";

export default function Banner({ title, subtitle, email }) {
  return (
    <Fragment>
      <div className="banner">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className="enter-email">
          <input type="e"/>
        </div>
        
      </div>
    </Fragment>
  );
}
