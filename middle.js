const middle = function(array) {
  const midItem = array.length / 2;

  if (array.length === array[0] || array.length === array[1]) {
    return [];
  } else if (array.length % 2 === 1) {
    return [array[Math.floor(midItem)]];
  } else {
    return [array[midItem - 1], array[midItem]];
  }
};

module.exports = middle;