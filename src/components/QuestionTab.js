import React, { Fragment } from "react";
import Questions from "../Question/Questions";

const QuestionTab = () => {
  const [activeIndex, setActiveIndex] = React.useState(null);
  const renderQuestions = Questions.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <Fragment key={item.id}>
        <div className="ui accordion questionTab">
          <div
            className={`title ${active}`}
            onClick={() => setActiveIndex(index)}
            style={{ color: "white", fontSize: "20px" }}
            id="question"
          >
            <i className="dropdown icon"></i>
            {item.question}
          </div>
          <div className={`content ${active}`}>
            <p className="answer">{item.answer}</p>
          </div>
        </div>
      </Fragment>
    );
  });

  return (
    <div className="ui container">
      <h1 className="frequently">Frequently Asked Questions</h1>
      {renderQuestions}
    </div>
  );
};

export default QuestionTab;
