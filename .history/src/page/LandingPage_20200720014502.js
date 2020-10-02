import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Enjoy from "../components/Enjoy";
import S from '../components/Download/show';
import Watch from "../components/Watch";

import { Fragment } from "react";

export default class LandingPage extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Enjoy />
        <Download />
        <Watch />
      </Fragment>
    );
  }
}
