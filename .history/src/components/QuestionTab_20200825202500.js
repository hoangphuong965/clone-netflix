import React, { Component } from "react";
import data from "../Question/Questions";

export default class QuestionTab extends Component {
  state = {
    data,
  };

  render() {
    return <article className="questiontab">
      {this.state}
    </article>;
  }
}
