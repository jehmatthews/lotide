const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
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

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1); // taking the keys from object1 (const ab)
  const keys2 = Object.keys(object2); // taking the keys from object2 (const ba)
  if (keys1.length !== keys2.length) { // if said objects length arent equal return false
    return false;
  } // if object lengths are equal move to next if
  for (let key of keys1) { // looping through object1
    if (Array.isArray(object1[key]) && (Array.isArray(object2[key]))) { //if object1 is an array, take key and object2, do the same 
      if (!eqArrays(object1[key], object2[key])) { // if eqArrays retuns false move to else if
        return false;
      }
    }
    else if (object1[key] !== object2[key]) { // if object key1 and key2 dont equal each other return false
      return false;
    }
  }
  return true; // other wise return true
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba));

const abc = { a:"1", b: "2", c: "3" };
console.log(eqObjects(ab, abc));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)) // => false

module.exports = eqObjects;