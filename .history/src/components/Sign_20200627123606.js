import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/netflix_logo.svg";

export default function Sign() {
  return (
    <div className="navbar">
      <nav className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </div>
      </nav>
      <div className="sign-in">
        <div className="form-main">
          <h1>Sign In</h1>
          <form className="form-input">
            <section>
              <input
                type="email"
                name="email"
                className="email sign-input"
                placeholder="Email or phone number"
              />
            </section>
            <section>
              <input
                type="password"
                name="password"
                className="password sign-input"
                placeholder="Password"
              />
            </section>
            <input type="submit" value="Sign in" className="sign-submit" />
          </form>
        </div>
        <div className="form-other"></div>
      </div>
    </div>
  );
}
