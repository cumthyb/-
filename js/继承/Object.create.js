function object(o){
  function W(){
  }
  W.prototype = o;
 return new W();
}


// 适用场景

// 只想让一个对象跟另一个对象建立继承这种关系的时候，可以用Object.create();这个方法，不兼容的时候，则手动添加该方法来兼容。

function createAnother(origin){
  var clone=object(origin);
  clone.say=function(){
    alert('hi')
  }
  return clone;
}
