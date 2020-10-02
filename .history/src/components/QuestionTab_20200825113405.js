import React, {useState} from "react";
import { flatten } from "../Utils/Helper";
import Quest from "../Question/Questions";
import { useState } from "react";

const QuestionTab = () => {

  const [question, setQuestion] = useState([])

  const flattenQuestion = flatten(Quest);
  console.log(flattenQuestion);
  
  return (
    <div className="questiontab">
      <h1>Câu hỏi thường gặp</h1>
      <article className="questions">

      </article>
    </div>
  );
};

export default QuestionTab;
