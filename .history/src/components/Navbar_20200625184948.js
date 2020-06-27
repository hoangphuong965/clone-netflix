import React, { Component } from "react";
// import {Link} from 'react-router-dom';
import logo from "../images/netflix_logo.svg";
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div className="nav-sign">
            <a to="">sign in</a>
          </div>
        </div>
      </nav>
    );
  }
}
