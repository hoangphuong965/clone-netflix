// import React, { Component } from "react";
// import data from "../Question/Questions";

// export default class QuestionTab extends Component {
//   state = {
//     data,
//   };

//   render() {
//     return (
//       <>
//         {this.state.data.map((item) => {
//           return (
//             <article className="questiontab" key={item.id}>
//               <h3>{item.question}</h3>
//               <p>{item.answer}</p>
//             </article>
//           );
//         })}
//       </>
//     );
//   }
// }

import React,{useState} from "react";
import data from "../Question/Questions";

const QuestionTab = () => {
  const [Question, setQuestion] = useState([]);
  setQuestion = data.map(item=>{})
  return <div></div>;
};

export default QuestionTab;
