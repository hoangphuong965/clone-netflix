import React from "react";
// import { flatten } from "../Utils/Helper";
import data from "../Question/Questions";

const QuestionTab = () => {
  const question data.forEach((item) => {
    const question = item.question;
    console.log(question);
  });
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
