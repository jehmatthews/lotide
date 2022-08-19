const data = ["may", "the", "force", "be", "with", "you"];

const takeUntil = function(array, callback) {
  const results = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) {
      break;
    } else { 
      results.push(array[i]);
    }
  }
  return results;
}

const results2 = takeUntil(data, i => i === "be")
console.log(results2);