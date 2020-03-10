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
  let _this = this
  if (typeof this !=='function') {
    throw new TypeError('must be function')
  }
  
  var fbound=function (...rest2) {
    return _this.call(obj, [...rest, ...rest2])
  }


}

// mdn的实现
if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== 'function') {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var aArgs = Array.prototype.slice.call(arguments, 1),
      fToBind = this,
      fNOP = function () { },
      fBound = function () {
        // this instanceof fBound === true时,说明返回的fBound被当做new的构造函数调用
        return fToBind.apply(this instanceof fBound
          ? this
          : oThis,
          // 获取调用时(fBound)的传参.bind 返回的函数入参往往是这么传递的
          aArgs.concat(Array.prototype.slice.call(arguments)));
      };

    // 维护原型关系
    if (this.prototype) {
      // Function.prototype doesn't have a prototype property
      fNOP.prototype = this.prototype;
    }
    // 下行的代码使fBound.prototype是fNOP的实例,因此
    // 返回的fBound若作为new的构造函数,new生成的新对象作为this传入fBound,新对象的__proto__就是fNOP的实例
    fBound.prototype = new fNOP();

    return fBound;
  };
}

Function.prototype.bind3 = function (context) {

  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }

  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);
  var fNOP = function () { };

  var fbound = function () {
    self.apply(this instanceof self ? this : context,
      args.concat(Array.prototype.slice.call(arguments)));
  }

  fNOP.prototype = this.prototype;
  fbound.prototype = new fNOP();

  return fbound;

}


function add(c, d) {
  return this.a + this.b + c + d;
}

const obj = { a: 1, b: 2 };
console.log(add.call2(obj, 3, 4))
console.log(add.apply2(obj, [3, 4]))


function throttle(fn, wait) {

}

