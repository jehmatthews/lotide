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

eqArrays([1, 2, 3], [1, 2, 3]), true // => true
eqArrays([1, 2, 3], [3, 2, 1]), false // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]), true // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]), false // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);