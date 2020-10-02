// flatten
export function flatten(data) {
  return data.map((item) => {
    let question = item.question;
    let answer = item.answer;
    return { ...item, question, answer };
  });
}
