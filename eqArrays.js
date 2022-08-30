const eqArrays = function(array1, array2) {
  let result = true; // assigning true to our result variable
  if (array1.length === array2.length) { // if the lengths of arrays are equal..
    for (let i = 0; i < array1.length; i++) {// loop through to then return true
      if (array1[i] !== array2[i]) { // if unequal, return false
      return false;
      } 
    }
    return result; // where our true result is executed
  } else {
    return false;
  }
};

module.exports = eqArrays;