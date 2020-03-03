var length = 5

function fn() {
  console.log(this.length);
}


var obj = {
  length: 10,
  methods: function (fn) {
    this.length=3
    fn()
    console.log(arguments);
    var _fn=arguments[0]
    arguments[0]()
    _fn()
  }
}

obj.methods(fn)



var len = 10;
var obj1 = {
    len:6,
    method:function(){
        console.log(this.len);
    }
};
var obj2 = {
    len:5,
    method:function(fn){
        fn();
        arguments[0](); 
    }
};

obj2.method(obj1.method,obj2.method);  // 10 undefined
/*
第一个 fn  this指向window   输出10
第二个 arguments[0]()    this指向arguments
arguments = {
0:obj1.method,   //function(){console.log(this.len);}
1:obj2.method,
length:2
}
arguments没有len属性，所以为undefined
*/


// var a=1

// function func() {
//   a=b=2
// }

// func()

// console.log(a);
// console.log(b);


// var username='jack'
// function change(){
//   console.log(username);
//   var username='lili'
//   console.log(username);
// }
// change()


// var a=12

// function fn1(){
//   console.log(a);
//   return 4
//   var a=45
// }

// fn1()


// var a = 1
// function fn() {
//     if (!a) {
//         var a = 123
//     }
//     console.log(a)
// }
// fn()