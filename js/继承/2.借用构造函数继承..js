function SuperType(){
  this.colors = ["red", "blue", "green"];
}
function SubType(){
   //继承了SuperType
  SuperType.call(this);
}
var instance1 = new SubType();
// instance1.colors.push("black");
// alert(instance1.colors); //"red,blue,green,black"
// var instance2 = new SubType();
// alert(instance2.colors); //"red,blue,green"

console.log(instance1 instanceof SuperType) 
console.log(instance1 instanceof SubType) 


/**
 * 赋值了父类上的属性，但是没有父类上的方法
 */