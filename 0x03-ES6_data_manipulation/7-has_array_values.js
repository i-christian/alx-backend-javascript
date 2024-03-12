const hasValuesFromArray = (set, array) => {
  const result = array.every((value) => set.has(value));
  return result;
};

export default hasValuesFromArray;
