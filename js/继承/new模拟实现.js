
function Dog(name) {
  this.name = name
}

Dog.prototype.bark = function () {
  console.log('wang wang');
}

Dog.prototype.sayName = function () {
  console.log('my name is ' + this.name);
}

/**
 * 实现一个new
 */

function _new(Fn, ...args) {
  // let _obj = {}
  // _obj.__proto__ = Fn.prototype

  let _obj = Object.create(Fn.prototype)


  let res = Fn.call(_obj, ...args)
  return res instanceof Object ? res : _obj
}

let dog = _new(Dog, 'tiger')
dog.bark()
dog.sayName()
