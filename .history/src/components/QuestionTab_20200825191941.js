import React from "react";
// import { flatten } from "../Utils/Helper";
import data from "../Question/Questions";

const QuestionTab = () => {
  const questions = data.forEach((item) => item.question);

  const { question, answer } = questions;

  return (
    <div className="questiontab">
      <h1>Câu hỏi thường gặp</h1>
      <article className="questions">
        <h3>{}</h3>
      </article>
    </div>
  );
};

export default QuestionTab;
