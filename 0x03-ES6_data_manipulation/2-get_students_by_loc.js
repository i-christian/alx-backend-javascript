const getStudentsByLocation = (array, city) => {
  if (!Array.isArray(array)) {
    return [];
  }

  return (array.filter((item) => item.location === city));
};

export default getStudentsByLocation;
