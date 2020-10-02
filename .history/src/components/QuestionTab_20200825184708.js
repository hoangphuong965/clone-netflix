import React, {useState} from "react";
// import { flatten } from "../Utils/Helper";
import Quest from "../Question/Questions";

const QuestionTab = () => {

  const question = Quest.question;


  
  return (
    <div className="questiontab">
      <h1>Câu hỏi thường gặp</h1>
      <article className="questions">
  Quest.forEach(item => {
    
  })
      </article>
    </div>
  );
};

export default QuestionTab;
