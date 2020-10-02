import React, { Component } from "react";
import data from "../Question/Questions";

export default class QuestionTab extends Component {
  state = {
    data,
  };

  render() {
    return (
      <>
        {this.state.data.map((item, index) => {
          return <article className="questiontab" key={index}>

          </article>;
        })}
      </>
    );
  }
}
