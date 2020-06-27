import React from "react";
import { Fragment } from "react";

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
                  <input type="email" className="input-email" />
                </label>
              </li>
            </ul>
            <>GET </>
          </div>
        </form>
        <h3>{email_title}</h3>
      </div>
    </Fragment>
  );
}
