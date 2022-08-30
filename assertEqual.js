const assertEqual = function(actual, expected) { // takes in 2 parameters, compares your actual to what you expect
  if (actual === expected) { // the comparison
    console.log(`😃 Assertion Passed: ${actual} === ${expected}`); //passes if true
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);// fails if unequal
  }
};

module.exports = assertEqual;
