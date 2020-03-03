const result = []

function getRsult(data, n, sum, stack = []) {
  if (n == 0 && sum == 0) {
    // result.push(stack)
    // return true
    console.log(stack)
  }
  if (n < 0) {
    return false
  }
  if (n > 0) {
    for (var i = 0; i < data.length; i++) {
      var tempArr = data.slice(i + 1, data.length);
      return getRsult(tempArr, n - 1, sum - data[i], [].concat(...stack, data[i]))
        || getRsult(tempArr, n, sum, [].concat(stack));
    }
  }
};

// console.log(getRsult([1, 2, 3, 4], 2, 5))
console.log(getRsult([1, 2, 3, 4, 5, 6, 7], 4, 19))
console.log(result)
