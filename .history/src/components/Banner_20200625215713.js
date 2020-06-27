import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Banner({ title, subtitle, email_title }) {
  return (
    <Fragment>
      <div className="story">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <form action="">
          <div className="email-form">
            <ul className="form">
              <li>
                <label className="input-email" placeholder="email">
                <input type="email" class="input-email" style="
    width: 25rem;
    height: 2rem;
">
                </label>
              </li>
            </ul>
            <Link to="/">GET STARTED</Link>
          </div>
        </form>
        <h3>{email_title}</h3>
      </div>
    </Fragment>
  );
}
