
var a = 9;
function fn() {
  a = 0;
  return function (b) {
    return b + a++;
  }
}
var f = fn();
console.log(f(5));
console.log(fn()(5));
console.log(f(5));
console.log(a);

var ary = [1, 2, 3, 4];
function fn(ary) {
  ary[0] = 0;
  ary = [0];
  ary[0] = 100;
  return ary;
}
var res = fn(ary);
console.log(ary);
console.log(res);

var i = 10;
function fn() {
  return function (n) {
    console.log(n + (++i));
  }
}
var f = fn();
f(20);
fn()(20);
fn()(30);
f(30);

var num = 10;
var obj = { num: 20 };
obj.fn = (function (num) {
  this.num = num * 3; // this.num=60
  num++; // num=21
  return function (n) {
    this.num += n; // this.num=65 this.num=30
    num++; // num=22 // 23
    console.log(num); // =>22 =>23
  }
})(obj.num);
var fn = obj.fn;
fn(5);
obj.fn(10);
console.log(num, obj.num);// 65 30



function Fn() {
  this.x = 100;
  this.y = 200;
  this.getX = function () {
    console.log(this.x);
  }
}
Fn.prototype.getX = function () {
  console.log(this.x);
};
Fn.prototype.getY = function () {
  console.log(this.y);
};
var f1 = new Fn;
var f2 = new Fn;
console.log('1', f1.getX === f2.getX);
console.log('2', f1.getY === f2.getY);
console.log('3', f1.__proto__.getY === Fn.prototype.getY);
console.log('4', f1.__proto__.getX === f2.getX);
console.log('5', f1.getX === Fn.prototype.getX);
console.log('6', f1.constructor);
console.log('7', Fn.prototype.__proto__.constructor);
f1.getX();
f1.__proto__.getX();
f2.getY();
Fn.prototype.getY();


var fullName = 'language';
var obj = {
  fullName: 'javascript',
  prop: {
    getFullName: function () {
      return this.fullName;
    }
  }
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());


var name = 'window';
var Tom = {
  name: "Tom",
  show: function () {
    console.log(this.name);
  },
  wait: function () {
    var fun = this.show;
    fun();
  }
};
Tom.wait();



function fun() {
  this.a = 0;
  this.b = function () {
    alert(this.a);
  }
}
fun.prototype = {
  b: function () {
    this.a = 20;
    alert(this.a);
  },
  c: function () {
    this.a = 30;
    alert(this.a)
  }
}
var my_fun = new fun();
my_fun.b();
my_fun.c();