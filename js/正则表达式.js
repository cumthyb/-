/*
* 1.正则表达式验证 6-16 位 同时包含小写大写数字
* 2.1-10位数字字母下划线组成，必须包含下划线
* 3.单词前后加空格
*/


var reg3 = /\b([a-zA-Z]+\b)/g
var str3 = 'no做no死,你能你can,不能no哔哔';
str3.replace(reg3, ' $1 ')




/*
查询字符串提取为对象
https://www.baid.com/s?wd=sdf&rssv_stp=1&ks
*/

function getQueryParmas(url) {
  let reg = /([^&=?]+)=([^&=?]+)/g
  // let mcs=url.match(reg)
  // console.log(mcs);
  // console.log(reg.exec(url)); 

  var res = {}
  var ec = reg.exec(url)
  while (ec) {
    // console.log(ec);
    res[ec[1]] = ec[2]
    ec = reg.exec(url)
  }
  console.log(res);
}

getQueryParmas('https://www.baid.com/s?wd=sdf&rssv_stp=1&ks')



/*
连续出现次数最多的字符
*/

var str = 'aaabbbbccccddaaaaaaaaccdddddddd'
var reg = /([a-zA-Z])\1+/g


var match = str.match(reg)
console.log(match)

match.sort((p1, p2) => p2.length - p1.length)
console.log(match)

var a = { n: 1 }
var b = a
a.n = a = { m: 2 }
console.log(a)
console.log(b)


  (function () {
    try {
      throw new Error()
    } catch (x) {
      var x = 1, y = 2;
      console.log('catch x', x)
    }
    console.log('out x', x)
    console.log('out y', y)
  }

  )()

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i)
  }, i * 1000);
}

var reg = /^\s*|\s*$/
var str = '   sdfsd dsdf   '
str.replace(reg, '')


var str = 'adf455c5fgdf456121khjk8989d7sd778;kj'
var reg = /(\d+)/g
var match = str.match(reg)


var a = 1

if (function b() { }) {
  a += typeof (b)
}
console.log(a)

var y = 1,
  x = y = typeof x;
x;

var f = (function f() {
  return "1";
}, function g() {
  return 2;
})();
typeof f;

(function (foo) {
  return typeof foo.bar;
})({
  foo: {
    bar: 1
  }
});

(function f() {
  function a(params) {

  }
  return a()
  function b(params) {

  }
})();


function Foo() {
  getName = function () {
    alert(1);
  };
  return this;
}
Foo.getName = function () {
  alert(2);
};
Foo.prototype.getName = function () {
  alert(3);
};
var getName = function () {
  alert(4);
};


//请写出以下输出结果：
Foo.getName();// 2
getName(); // 4
Foo().getName(); // 2
getName(); // 1
new Foo.getName();//2
new Foo().getName();//3
new new Foo().getName();//3

var x = 1;
var y = 2;
function show(params) {
  var x = 3
  return {
    x: x,
    fun: function (a, b) {
      x = a + b
    }
  }
}

var obj = show()
obj.fun(x, y)
console.log(obj.x)
console.log(x)

function a(xx) {
  this.x=xx;
  return this
}
var x=a(5)
var y=a(6)

console.log(x.x)
console.log(y.x)


var a={n:1}
var b=a
a.n=a={m:1}
console.log('a',a)
console.log('b',b)


var name='1'
function Fn(){
  (function (params) {
    this.name='2'
  }).call(window)
}

Fn.prototype.create=function (params) {
  this.name='3'
}

console.log(new new Fn().create().name)

优先级： .优先级19 无参构造函数优先级18
优先级相同的按照从左到右运算

=> new fn.create().name

=> (new fn.create)().name