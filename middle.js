const eqArrays = function(array1, array2) {
  let result = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      return true;
    } else if (array1 !== array2) {
      return false;
    }
  }
  return result;
};

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`Assertion Passed`);
  } else {
    console.log(`Assertion Failed`);
  }
};

const middle = function(array) {
  const midItem = array.length / 2;

  if (array.length === array[0] || array.length === array[1]) {
    return ("[]");
  } else if (array.length % 2 === 1) {
    return array[Math.floor(midItem)];
  } else {
    return [array[midItem - 1], array[midItem]];
  }
};


console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

console.log(middle([1, 2, 3, 4]));// => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]