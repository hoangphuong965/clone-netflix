import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Enjoy from "../components/Enjoy";
import Show from '../components/Download/Show';
import QuestionTab from "../components/QuestionTab";

import { Fragment } from "react";

export default class LandingPage extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Enjoy />
        <Show />
        <Show />
      </Fragment>
    );
  }
}
