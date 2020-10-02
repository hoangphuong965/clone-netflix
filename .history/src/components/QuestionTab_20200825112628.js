import React from "react";
import { flatten } from "../Utils/Helper";
import Quest from "../Question/Questions";

const QuestionTab = () => {
  const flattenQuestion = flatten(Quest);
  return (
    <div className="questiontab">
      <h1>Câu hỏi thường gặp</h1>
      <article className="questions">

      </article>
    </div>
  );
};

export default QuestionTab;
