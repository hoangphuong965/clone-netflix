import React from "react";
import { Fragment } from "react";

export default function Banner({ intro, subtitle, email }) {
  return (
    <Fragment>
      <div className="banner">
      <h1>{title}</h1>
      <div></div>
      <p>{subtitle}</p>
      {children}
    </div>
    </Fragment>
  );
}
