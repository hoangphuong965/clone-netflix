import React from "react";
import { flatten } from "../Utils/Helper";
import Quest from "../Question/Questions";

const QuestionTab = () => {
  const flattenQuestion = flatten(Q);
  
  return (
    <div className="questiontab">
      <h1>Câu hỏi thường gặp</h1>
      <article className="questions">
        <h2>{flattenQuestion.question}</h2>
      </article>
    </div>
  );
};

export default QuestionTab;
