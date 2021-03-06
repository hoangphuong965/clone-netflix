import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/netflix_logo.svg";
import Banner from "../components/Banner";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <nav className="nav-center">
          <div className="nav-header">
            <Link></Link>
          </div>
          <div className="nav-sign">
            <Link to="/sign-in" className="nav-sign-link">
              sign in
            </Link>
          </div>
        </nav>
        <Banner
          title="Thousands of TV shows & movies. Entertainment guaranteed."
          subtitle="You'll love Netflix! If you don't, cancel within 7 days for a refund.
          "
          email_title="Ready to watch? Enter your email to create or restart your membership.
          "
        />
      </div>
    );
  }
}
