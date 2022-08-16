const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`Assertion Passed`);
  } else {
    console.log(`Assertion Failed`);
  }
};

const eqArrays = function(array1, array2) {
  let result = true;
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
      return false;
      } 
    }
    return result;
  } else {
    return false;
  }
};

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) { //looping through "hello"
    let character = sentence[i]; // character equals letters found in sentence(hello)
    if (character !== ' ') { // if not a space, move to next if
      if (!results[character]) { // if character ex."h", is not found, next line
        results[character] = [i]; // add the "h" to array in object "results"
      } else {
        results[character].push(i) // if character is found, ex."l", add another index number to "l" array ex [2] -> [2, 3]
      }
    } 
  }
  return results // return the object with arrays
};

console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").l, [2, 3]);