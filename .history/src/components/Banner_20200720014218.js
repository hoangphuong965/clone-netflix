import React from "react";
import { Link } from "react-router-dom";

export default function Banner({ title, subtitle, email_title }) {
  return (
    <>
      <div className="story">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <form action="">
          <div className="email-form">
            <ul className="form">
              <li>
                <label className="label-input-email">
                  <input
                    type="email"
                    className="input-email"
                    placeholder="email address"
                  />
                </label>
              </li>
            </ul>
            <Link to="/" className="btn-started">
              GET STARTED
            </Link>
          </div>
        </form>
        <h3>{email_title}</h3>
      </div>
    </>
  );
}
