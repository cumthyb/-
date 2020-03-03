var arr = [1, 2, [3, 4, [5, 6]]];
while (arr.some(item => Array.isArray(item))) {
  arr = [].concat(...arr)
}

// console.log(arr);


function fib(n) {
  if (n < 2) {
    return 1
  }

  let res = [1, 1]
  while (res.length < n) {
    var len = res.length
    res.push(res[len - 1] + res[len - 2])
  }
  return res[n - 1]
}

var res = fib(5)
console.log(res);


function fib(n) {
  function fn(count, n_2 = 1, n_1 = 1) {
    if (count === 0) {
      return n_1
    } else {
      return fn(n - 1, n_1, n_2 + n_1)
    }
  }
  return fn(n)
}

var res = fib(5)
console.log(res);
