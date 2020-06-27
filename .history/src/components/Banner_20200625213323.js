import React from "react";
import { Fragment } from "react";

export default function Banner({ title, subtitle, email }) {
  return (
    <Fragment>
      <div className="story">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
      <form action=""></form>
    </Fragment>
  );
}
