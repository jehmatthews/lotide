const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) { 
  const keys = Object.keys(object); // variable that takes in all keys of object ex. bestTVShowsByGenre
  for (let i = 0; i < keys.length; i++) { // loops through said object
    if (value === object[keys[i]]) { // if the value ex. "drama" == the key index..
      return keys[i]; // return that key index
    }
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const bestMoviesByGenre = {
  sci_fi : "Interstellar",
  fantasy : "LOTR",
  drama : "Forrest Gump"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestMoviesByGenre, "Interstellar"), "sci_fi");
assertEqual(findKeyByValue(bestMoviesByGenre, "Star Trek"), undefined);

module.exports = findKeyByValue;
