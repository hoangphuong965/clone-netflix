// flatten
export function flatten(data) {
  return data.map((item) => {
     let question = item.question;
     let question = item.an;
    return { ...item, question };
  });
}
