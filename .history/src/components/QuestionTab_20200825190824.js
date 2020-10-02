import React from "react";
// import { flatten } from "../Utils/Helper";
import Quest from "../Question/Questions";

const QuestionTab = () => {
  Quest.forEach((item) => {
    const question = item.question;
    return `<h3>${question}</h3>`
  });

  return (
    <div className="questiontab">
      <h1>Câu hỏi thường gặp</h1>
      <article className="questions">
        <
      </article>
    </div>
  );
};

export default QuestionTab;
