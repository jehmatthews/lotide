const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) { 
  const keys = Object.keys(object); // variable that takes in all keys of object
  for (let i = 0; i < keys.length; i++) {
    if (callback(object[keys[i]]) === true) {
      return keys[i];
    }
  }
};

console.log(findKey({
  "Montreal": { cups: 24 },
  "Toronto": { cups: 13 },
  "Boston": { cups: 6 }
}, i => i.cups === 24)); // => "Montreal"

assertEqual(findKey({
  "Montreal": { cups: 24 },
  "Toronto": { cups: 13 },
  "Boston": { cups: 6 }
}, i => i.cups === 24), "Montreal");