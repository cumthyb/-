for(var i =0;i<4;i++){
  setTimeout(() => {
    console.log('1for', i);
  }, 0);
}

new Promise((resolve,reject)=>{
  console.log('p', i);
  for(var i =0;i<9999;i++){
    if (i===999) {
      resolve()
    }
  }
  setTimeout(() => {
    console.log('settimeout in p', i);
  }, 0);

}).then(()=>{
  console.log('then', i);
})

console.log('end',i);


function fun(n,o) {
  console.log(o);
  return {
    fun:function (m) {
      return fun(m,n)
    }
  }
}

var a=fun(0);
a.fun(1);
a.fun(2)
a.fun(3)

var b=fun(0).fun(1).fun(2).fun(3)

var c=fun(0).fun(1)
c.fun(2);
c.fun(3)




if(!(kkkkk in window)){
  var kkkkk=1
}
console.log(kkkkk);

var c=1
function c(c){
  console.log(c);
}
c(2)


var a=9; 
function fn(){ 
    a=0;       
    return function(b){ 
        return b+a++; 
    }    
}
var f=fn();
console.log(f(5));
console.log(fn()(5));
console.log(f(5));
console.log(a);