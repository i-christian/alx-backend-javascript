const getStudentIdsSum = (array) => {
  if (!Array.isArray(array)) {
    return [];
  }

  return (array.reduce((accumulator, object) => accumulator + object.id, 0));
};

export default getStudentIdsSum;
