// flatten
export function flatten(data) {
  return data.map((item) => {
     let question = item
    return { ...item };
  });
}
