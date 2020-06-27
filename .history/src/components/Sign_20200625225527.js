import React from 'react'
import { Link } from "react-router-dom";
import logo from "../images/netflix_logo.svg";
import Banner from "../components/Banner";

export default function Sign() {
    return (
        <div className="navbar">
        <nav className="nav-center">
          <div className="nav-header">
            <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>
          </div>
          <div className="nav-sign">
            <Link to="/sign-in" className="nav-sign-link">
              sign in
            </Link>
          </div>
        </nav>
      </div>
    )
}
