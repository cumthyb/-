const result = []

function getResult(data, n, sum, stack = []) {
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
      return getResult(tempArr, n - 1, sum - data[i], [].concat(...stack, data[i]))
        || getResult(tempArr, n, sum, [].concat(stack));
    }
  }
};

function getResult2(arr, n, m, res = []) {
  if (n === 0 && m === 0) {
    console.log(res)
  }
  if(n<0){
    return 
  }
  if (n > 0) {
    for (var i = 0, len = arr.length; i < len; i++) {
      let tmpArr = arr.slice(i + 1, len)
      return getResult(tmpArr, n, m, [...res])
        || getResult(tmpArr, n - 1, m - arr[i], [...res, arr[i]])
    }

  }

}

// console.log(getResult([1, 2, 3, 4], 2, 5))
console.log(getResult([1, 2, 3, 4, 5, 6, 7], 4, 19))
console.log(result)
