function SuperType() {
  this.property = true;
}

SuperType.prototype.getSuperValue = function () {
  return this.property;
}

function SubType() {
  this.subproperty = false;
}

SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function () {
  return this.property;
};

var instance = new SubType();

console.log(instance.getSuperValue()); //true;
console.log(instance.getSubValue()); //true;


/**
 * 弊端：共享父类上的属性，任何自类都可以修改
 */