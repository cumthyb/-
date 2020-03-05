// 基本思想：寄生式继承是与原型式继承紧密相关的一种思路，
// 它创造一个仅用于封装继承过程的函数，在函数内部以某种方式增强对象，最后再返回对象
// 工厂模式

function object(origin) {
  function Fn() { }
  Fn.prototype = origin;
  return new Fn()
}

function createAnother(original) {
  // 通过调用函数创建一个新对象
  var clone = object(original);
  // 以某种方式来增强对象
  clone.sayHi = function () {
    alert("Hi");
  };
  // 返回这个对象
  return clone
}


/**
 * 在原型继承的基础上给新新对象添加了方法，
 * 给新对象添加方法，这就是寄生，寄生在原型继承的基础上
 * 使用寄生式继承来为对象添加函数，会因为做不到函数复用而降低效率，这个与构造函数模式类似
 */