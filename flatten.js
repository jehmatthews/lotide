const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  let result = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      return true;
    } else if (array1 !== array2) {
      return false
    }
  }
  return result
};

const flatten = function(array) {
  let result = []; // set result to empty array to take in result
  for (let i = 0; i < array.length; i++) { // loop through length of array
    if (Array.isArray(array[i])) { // if array found, return the index of said array
      result = result.concat(array[i]); // concat all arrays inside arrays index
    } else {
      result.push(array[i]); // push elements to result array
    }
  }
  return result;
};
console.log(flatten([1, 2, [3, 4], 5, [6]]));

module.exports = flatten;