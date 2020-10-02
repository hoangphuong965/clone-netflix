// flatten
export function flatten(data) {
  return data.map((item) => {
    return { ...item };
  });
}
