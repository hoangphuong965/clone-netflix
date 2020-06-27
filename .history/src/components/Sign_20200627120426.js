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
          <form className="form">
            <section>
              <input type="email" name="email" id="email" />
            </section>
            <section>
              <input type="password" name="password" id=""/>
            </section>
          </form>
        </div>
        <div className="form-other"></div>
      </div>
    </div>
  );
}
