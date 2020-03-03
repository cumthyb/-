/*
Q1
*/

var A=function(){

}

A.prototype.n=1

var b=new A()

A.prototype={
  m:3,
  n:2
}

var c=new A()
console.log(b.n,b.m,c.n,c.m);



/*
Q2
*/

var F=function(){}

Object.prototype.a=function(){
  console.log('a()');
}

Function.prototype.b=function(){
  console.log('b()');
}

var f=new F()
f.a(); // a
f.b(); // typeerror b is not a function
F.a(); // a
F.b(); // b