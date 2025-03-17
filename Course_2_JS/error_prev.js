var addTwoNums = function (a, b) {
  try {
    return a + b;
  } catch (error) {
    console.log(error);
  }
};

addTwoNums(5, "5");
