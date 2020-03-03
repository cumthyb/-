/*
题目：
求斐波那契数列的第n项
要求：
写一个函数，输入n，求斐波那契数列数列的第n项。
*/

function fib1(n) {
  if (n === 0 || n === 1) {
    return 1
  }

  return fib1(n - 1) + fib1(n - 2)
}

// console.log(fib1(10))



function fib2(n) {
  let cache = {}

  function cal(n) {
    if (n === 0 || n === 1) {
      return 1
    }

    if (!cache[n]) {
      cache[n] = cal(n - 1) + cal(n - 2)
      return cache[n]
    }
    else return cache[n]
  }

  return cal(n)
}

// console.log(fib2(150))


function fib3(n, ret1 = 1, ret2 = 1) {
  if (n < 2) {
    return ret2
  } else {
    return fib3(n - 1, ret2, ret1 + ret2)
  }
}
// console.log(fib3(150))


function fib4(n) {
  let a = 1
  let b = 1
  let res = 0
  for (var i = 2; i <= n; i++) {
    res = a + b
    a = b
    b = res
  }
  return res
}
console.log(fib4(150))
