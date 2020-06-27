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
        <div className="sign-in">
          <div className="form-main"></div>
          <div className="form-other"></div>
        </div>
      </nav>
    </div>
  );
}
