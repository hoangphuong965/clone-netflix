import React, { useState } from "react";
// import { flatten } from "../Utils/Helper";
import Quest from "../Question/Questions";

const QuestionTab = () => {
  Quest.forEach((item) => {
    const question = item.question;
    console.log(question);
  });

  return (
    <div className="questiontab">
      <h1>Câu hỏi thường gặp</h1>
      <article className="questions">
        <h3>day la</h3>
      </article>
    </div>
  );
};

export default QuestionTab;
