import React, {useState} from "react";
// import { flatten } from "../Utils/Helper";
import Quest from "../Question/Questions";

const QuestionTab = () => {

  

  Quest.forEach(item => {
    const question = item.question;
    console.log(ques);
  })
  
  return (
    <div className="questiontab">
      <h1>Câu hỏi thường gặp</h1>
      <article className="questions">

      </article>
    </div>
  );
};

export default QuestionTab;
