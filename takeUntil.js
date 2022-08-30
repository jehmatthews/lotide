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

const data = ["may", "the", "force", "be", "with", "you"];

const takeUntil = function(array, callback) {
  const results = []; // results go into empty array
  for (let i = 0; i < array.length; i++) { // looping through array length
    if (callback(array[i]) === true) { // if array[i] in callback === true
      break; //stop here
    } else { 
      results.push(array[i]);
    }
  }
  return results;
}

const results2 = takeUntil(data, i => i === "be") // callback is calling for loop to break when it reaches "be"
console.log(results2);

assertArraysEqual(results2, ["may", "the", "force"]);

module.exports = takeUntil;