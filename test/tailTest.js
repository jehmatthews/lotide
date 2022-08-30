const assert = require('chai').assert;
const tail = require('../tail');
// tests written to ensure we are returning the tail section of array
// we accomplish this by slicing the array at the [1] index of array
describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("returns [2, 3, 4, 5] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });
  it("returns ['test', 'test'] for ['test', 'test', 'test']", () => {
    assert.deepEqual(tail(['test', 'test', 'test']), ['test', 'test']);
  });
});
// we use 'deepEqual' because '===' will not work for comparing obj/arr