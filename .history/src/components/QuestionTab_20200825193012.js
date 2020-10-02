import React from "react";
// import { flatten } from "../Utils/Helper";
import data from "../Question/Questions";

const QuestionTab = () => {
  const 
  const questions = data.forEach((item) => {
    return item.question;
  });


  console.log(questions);

  return (
    <div className="questiontab">
      <h1>Câu hỏi thường gặp</h1>
      <article className="questions">

      </article>
    </div>
  );
};

export default QuestionTab;
