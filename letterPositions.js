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
  for (let i = 0; i < sentence.length; i++) {
    let character = sentence[i];
    if (character !== ' ') {
      if (!results[character]) {
        results[character] = [i];
      } else {
        results[character].push(i)
      }
    } 
  }
  return results
};

console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").l, [2, 3]);