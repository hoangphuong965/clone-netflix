import React, { useState } from "react";
import { Question } from "../Question/Questions";

const QuestionTab = () => {
  const [Question, setQuestion] = useState(Question);
  return (
    <div className="questiontab">
      <h1>Câu hỏi thường gặp</h1>
    </div>
  );
};

export default QuestionTab;
