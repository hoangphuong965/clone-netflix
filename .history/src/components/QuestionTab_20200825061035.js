import React, { useState } from "react";
import { Quest } from "../Question/Questions";

const QuestionTab = () => {
  const [Question, setQuestion] = useState([]);
  setQuestion({
       question: Quest
  })
  console.log(Question);
  return (
    <div className="questiontab">
      <h1>Câu hỏi thường gặp</h1>
    </div>
  );
};

export default QuestionTab;
