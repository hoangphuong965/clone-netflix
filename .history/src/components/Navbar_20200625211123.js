import React, { Component } from "react";
import {Link} from 'react-router-dom';
import logo from "../images/netflix_logo.svg";
export default class Navbar extends Component {
  render() {
    return (
      <div className="hero">
        <nav className="nav-center">
          <div className="nav-header">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div className="nav-sign">
            <Link to="/" className="nav-sign-link">sign in</Link>
          </div>
        </nav>
      </div>
    );
  }
}
