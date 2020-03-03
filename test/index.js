function getNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

// var num = getNumber(10, 18)
// console.log(num);


// console.log(num);
// if(('num' in window)){
//   var num=100
// }
// console.log(num);


// var name='a'
// var age=5000
// name=(function (name,age) {
//   arguments[0]='b'
//   age=age||this.age
//   console.log(name,age);
// })(name)
// console.log(name,age);


// var ary=[100,200]
// ~function (ary) {
//   ary.length--;
//   ary=[]
//   ary[ary.length]=300
//   console.log(ary); // [300]
// }(ary)
// console.log(ary); // [100]



// function fn(i) {
//   return function (n) {
//     console.log(n*(++i));
//   }
// }

// var f=fn(2)
// f(3) // 9
// f(4) // 16
// fn(5)(6) // 36
// fn(7)(8) // 64



// var num = 1;
// var obj = { num: 2 }

// obj.fn = (function (num) {
//   this.num = num * 2   // window.num=4
//   num++  // num=3
//   return function (n) {
//     this.num += n; // window.num=14  obj.num=22
//     num++ // num 4 4
//     console.log(num); // =>4 =>5
//   }
// })(obj.num)

// var fn = obj.fn;
// fn(10);
// obj.fn(20)

// console.log(num, obj.num);// 14 22


// function Fn(num) {
//   this.x = this.y = num
// }

// Fn.prototype = {
//   x: 20,
//   sum: function (params) {
//     console.log(this.x + this.y);
//   }
// }

// var f = new Fn(10)
// console.log(f.sum === Fn.prototype.sum);
// f.sum()

// Fn.prototype.sum()
// console.log(f.constructor);



// function one(opt) {
//   return 1 + (opt || 0)
// }

// function two(opt) {
//   return 2 + (opt || 0)
// }

// function add(opt) {
//   return opt
// }

// one(add(two()))

// two(add(one()))


// function fun(a,b,c) {
//   var l=arguments.length;
//   var num=0;
//   for (var i = 0; i < l; i++) {
//     num+=arguments[i]
//   }
//   console.log(num) ;
// }
// fun(1,2,3)
// fun(1,2,3,4)



function a() {
  y = function () {
    X = 2
  }
  return function () {
    var x = 3;
    y();
    console.log(this.x)
  }.apply(this, arguments)
}

a()


var length=10;

function fn() {
  console.log('this',this)
  console.log(this.length)
}

var obj={
  length:5,
  method:function (fn) {
    fn()
    arguments[0]()
  }
}

obj.method(fn,1)



function fun(n,o) {
  console.log(o)
  return {
    fun:function (m) {
      return fun(m,n)
    }
  }
}

var c=fun(0).fun(1)
c.fun(2)
c.fun(3)


var dad={}
var son={}

function show() {
  return this
}

var newShow=show.bind(dad)
var newShow1=newShow.bind(son)

console.log(newShow()==dad)
console.log(newShow1()==son)