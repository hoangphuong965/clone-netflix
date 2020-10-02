import React from "react";
// import { flatten } from "../Utils/Helper";
import data from "../Question/Questions";

const QuestionTab = () => {
  const questions = data.forEach((item) => {
    return item.question;
  });

  return (
    <div className="questiontab">
      <h1>Câu hỏi thường gặp</h1>
      <article className="questions">
        {<i class="fas fa-h3    "></i>}
      </article>
    </div>
  );
};

export default QuestionTab;
