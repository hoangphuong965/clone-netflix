import React, { Component } from "react";
import data from "../Question/Questions";

export default class QuestionTab extends Component {
  state = {
    data,
  };

  render() {
    return (
      <>
        {this.state.data.map((item) => {
          return (
            <article className="questiontab" key={item.id}>
              <h3>{item.question}</h3>
            </article>
          );
        })}
      </>
    );
  }
}
