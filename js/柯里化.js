// 用js实现一个可以实现累加的函数add(1)(2)(3) 

function add(...res) {
  let args = []
  args = args.concat(res)
  const _add = function (...rest2) {
    args = args.concat(rest2)
    if (args.length < 3) {
      return _add
    }
    else {
      return args.reduce((acc, item) => acc += item, 0)
    }
  }
  return _add
}

console.log(add(1)(2)(3));

function add2(a) {
  function s(b) {
    a = a + b;
    return s;
  }
  s.toString = function () { return a; }
  return s;
}
console.log(add2(1)(2)(3)(4).toString());