# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jehmatthews/lotide`

**Require it:**

`const _ = require('@jehmatthews/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: compares 2 arrays and checks if they are equal or not.
* `assertEqual(actual, expected`: compares 2 primitives and checks if the actual equals the expected
* `assertObjectsEqual(object1, object2)`: compares 2 objects and determines whether they are equal or unequal
* `countLetters(word)`: looks at a string and counts how many times each letter appears
* `countOnly(allItems, itemsToCount)`: this counts all the items from itemsToCount that are in allItems
* `eqArrays(array1, array2)`: checks to see whether 2 arrays are equal or unequal
* `eqObjects(object1, object2)`: checks to see whether 2 objects are equal or unequal
* `findKey(object, callback)`: looks at the object being called in the callback and returns the first value that passes as true
* `findKeyByValue(object, value)`: looks at an object for given value and returns first instance of true
* `flatten(array)`: flattens or concatenates all arrays inside an array
* `head(array)`: returns first element of an array
* `letterPositions(sentence)`: will return an array of index numbers based on the letter being searched for in given array
* `map(array, callback)`: loops through items of an array and returns a new array of letters based on index given in callback
* `middle(array)`: loops through array and returns middle elements of given array, and will vary based on whether their lengths are even or odd
* `tail(array)`: returns elements of a given array based on where it is sliced
* `takeUntil(array, callback)`: loops through an array and returns every element and breaks at the element expressed in the callback function
* `without(source, itemsToRemove)`: this function removes an item (called) from an array and returns it as a new array (source)