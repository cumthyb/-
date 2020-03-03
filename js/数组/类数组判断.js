function isArrayLike(obj) {
  return obj
    && typeof obj === 'object'
    && obj.__proto__ !== Array.prototype
    && 'length' in obj
    && obj.length >= 0
    && obj.length === Math.round(obj.length)
    && isFinite(obj.length)
}

console.log(isArrayLike([1, 2]));

(function () {
  console.log(isArrayLike(arguments))
})(1, 2)



var collection = document.getElementsByTagName('p')

var _arr = [...collection]
var _arr2 = Array.from(collection)
var _arr3 = [].slice.call(collection)