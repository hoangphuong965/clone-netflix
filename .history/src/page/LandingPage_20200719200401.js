import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Enjoy from "../components/Enjoy";
import Download from "../components/Download ";

import { Fragment } from "react";

export default class LandingPage extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Enjoy />
      </Fragment>
    );
  }
}
