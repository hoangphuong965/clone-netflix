import React from "react";
import { useState } from "react";
// import { flatten } from "../Utils/Helper";
import data from "../Question/Questions";

const QuestionTab = () => {
  const [question, setQuestion] = useState([]);
  const questions = data.forEach((item) => {
    return item.question;
  });
  setQuestion(questions);

  return (
    <div className="questiontab">
      <h1>Câu hỏi thường gặp</h1>
      <article className="questions">
        <h3>{question}</h3>
      </article>
    </div>
  );
};

export default QuestionTab;
