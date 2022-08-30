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


const words = ["may", "the", "force", "be", "with", "you"];

const map = function(array, callback) {
const results = []; // results will go in the array
  for (let item of array) { //looping through items of array
    results.push(callback(item)); // push the items of array 
  }
  return results;
};

const results1 = map(words, word => word[0]); // this callback pulls all the [0] index of all items in array
console.log(results1);

assertArraysEqual(results1, [ 'm', 't', 'f', 'b', 'w', 'y' ]);
assertArraysEqual(results1, ["g","c","t","m","t"]);
assertArraysEqual(results1, [ 'm', 't', 'f', 'b', 'w']);

module.exports = map;