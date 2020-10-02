import React from "react";
// import { flatten } from "../Utils/Helper";
import Quest from "../Question/Questions";

const QuestionTab = () => {
  let questions = Quest.forEach((item) => {
    const question = item.question;
    return question
  });

  return (
    <div className="questiontab">
      <h1>Câu hỏi thường gặp</h1>
      <article className="questions">
        <h3>{questions}</h3>
      </article>
    </div>
  );
};

export default QuestionTab;
