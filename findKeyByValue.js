const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  const keys = Object.keys(object);
  for (i = 0; i < keys.length; i++) {
    if (value === object[keys[i]]) {
      return keys[i];
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