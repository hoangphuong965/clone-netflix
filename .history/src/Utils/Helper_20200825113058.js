// flatten
export function flatten(data) {
  return data.map((item) => {
     let question = item.question;
    return { ...item, ques };
  });
}
