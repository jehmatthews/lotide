const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1); // looking through all keys of object1 and set to variable keys1
  const keys2 = Object.keys(object2); // looking through all keys of object2 and set to variable keys2
  if (keys1.length !== keys2.length) { // if keys.length unequal, returns false
    return false;
  }
  for (let key of keys1) { // loops through keys of keys 1
    if (Array.isArray(object1[key]) && (Array.isArray(object2[key]))) { //if object1 is an array, take key and object2, do the same 
      if (!eqArrays(object1[key], object2[key])) { // if eqArrays retuns false move to else if
        return false;
      }
    }
    else if (object1[key] !== object2[key]) {// if object key1 and key2 dont equal each other return false
      return false;
    }
  }
  return true; // otherwise return true
};


const assertObjectsEqual = function (actual, expected) {
  if (eqObjects(actual, expected)) { // comparing whether or objects equal each other
    console.log('Assertion Passed', actual, expected); // they do
  } else {
    console.log(`Assertion Failed`, actual, expected); // they do not
  }
};

assertObjectsEqual({a: "1", b: "2"}, {a: "1", b: "2"});
assertObjectsEqual({c: "3", d:"9"}, {e:"3", f: "9"});

module.exports = assertObjectsEqual;