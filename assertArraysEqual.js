const eqArrays = require('./eqArrays');

const assertArraysEqual = function (array1, array2) { // takes in 2 arrays as parameters
  if (eqArrays(array1, array2)) { // eqArrays function comes in and compares our arrays
    console.log(`Assertion Passed`); // assertion passes if arrays equal
  } else {
    console.log(`Assertion Failed`);// assertion fails if arrays unequal
  }
};

module.exports = assertArraysEqual;
