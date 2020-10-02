import React from "react";
// import { flatten } from "../Utils/Helper";
import Quest from "../Question/Questions";

const QuestionTab = () => {
 

  return (
    <div className="questiontab">
      <h1>Câu hỏi thường gặp</h1>
      <article className="questions">
        { Quest.forEach((item) => {
    const question = item.question;
    return question
  });}
      </article>
    </div>
  );
};

export default QuestionTab;
