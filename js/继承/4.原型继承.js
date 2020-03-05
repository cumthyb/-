function SuperType(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function () {
  alert(this.name);
};

function object(superType) {
  function Fn() { }
  Fn.prototype = superType
  return new Fn()
}



/**
 * 创建相似的对象
 * 弊端，共用原型上的属性
 */