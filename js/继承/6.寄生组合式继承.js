function Supertype(name) {
  this.name = name;
  this.colors = ["red", "green", "blue"];
}

Supertype.prototype.sayName = function () {
  console.log(this.name);
};

function Subtype(name, age) {
  // 继承属性
  Supertype.call(this, name);
  this.age = age;
}

// 继承原型上的方法
Subtype.prototype=Object.create(Supertype.prototype)
// 保护自身的构造函数
Subtype.prototype.constructor=Subtype;

Subtype.prototype.sayAge = function () {
  console.log(this.age);
};

// 使用借用构造函数(call)来继承父类this声明的属性/方法
// 通过寄生式封装函数设置父类prototype为子类prototype的原型来继承父类的prototype声明的属性/方法。