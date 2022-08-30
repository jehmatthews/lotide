const assert = require('chai').assert;
const middle = require('../middle');
// tests that check that the middle element or elements are returned
describe("#middle", () => {
  it("returns [] for [1]", () => { // return emptay arr for only 1 or 2 element w/ no middle
    assert.deepEqual(middle([1]), []);
  });
  it("returns [2] for [1, 2, 3]", () => { // returns 1 element when arr.length is odd
    assert.deepEqual(middle([1, 2 ,3]), [2]);
  });
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => { // returns 2 elements when arr.length is even
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});