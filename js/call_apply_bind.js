function fun_case(data) {
  switch (data) {
    case 1:
      console.log(1);
    case 2:
      console.log(2);
    case 3:
      console.log(3);
    case 4:
      console.log(4);
    case 5:
    case 6:
      console.log(6);
  }
}

// fun_case(4)



Function.prototype.call2 = function (obj, ...rest) {
  const contex = obj || window
  contex.fn = this
  const res = contex.fn(...rest)
  delete contex.fn
  return res
}

Function.prototype.apply2 = function (obj, rest) {
  const contex = obj || window
  contex.fn = this
  const res = contex.fn(...rest)
  delete contex.fn
  return res
}

// function.bind(thisArg[, arg1[, arg2[, ...]]])
Function.prototype.bind2 = function (obj, ...rest) {
  let _this=this
  return function(...rest2){
    return _this.call(obj,[...rest,...rest2])
  }
}



function add(c, d) {
  return this.a + this.b + c + d;
}

const obj = { a: 1, b: 2 };
console.log(add.call2(obj, 3, 4))
console.log(add.apply2(obj, [3, 4]))  


function throttle(fn,wait){
  
}

