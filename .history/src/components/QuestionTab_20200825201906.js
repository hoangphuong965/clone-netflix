import React from "react";
// import { flatten } from "../Utils/Helper";
import data from "../Question/Questions";

const QuestionTab = () => {
  let questions = data.forEach((item) => {
    return `<h3>${item.question}</h3>`;
  });

  
  return (
    <div className="questiontab">
      <h1>Câu hỏi thường gặp</h1>
      <article className="questions">
        {questions}
      </article>
    </div>
  );
};

export default QuestionTab;
