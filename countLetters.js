const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(word) {
  const count = {}; // count will go in here

  for (let i = 0; i < word.length; i++) { // loop through string
    const letter = word[i]; // this is the number of letters found in loop

    if (!count[letter]) { // if cant count a letter mor then once
      count[letter] = 1; // return 1 for that letter
    } else {
      count[letter]++; // if letter exists more then once, increment ++
    }
  }
  return count; 
};

console.log(countLetters('lighthouse in the house'));

module.exports = countLetters;