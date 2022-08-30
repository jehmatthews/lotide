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

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`Assertion Passed`);
  } else {
    console.log(`Assertion Failed`);
  }
};

const without = function (source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) { // this will loop through source given [1, 2, 3]
    let push = true; 
    for (let x = 0; x < itemsToRemove.length; x++) { // loops through itemsToRemove
      if (source[i] !== itemsToRemove[x]) { // if index in source does not equal index in iTR..
        push = true; 
      } else {
        push = false;
      }
    }
    if (push) {
      newArray.push(source[i]); // will return the source index matchin iTR index into new array
    }
  }
  console.log(newArray);
  return newArray;
};

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;