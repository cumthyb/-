/**
 * 判断是否是数组
 */
var arr=[1,2]

arr instanceof Array

Object.prototype.toString().call(arr) === '[object Array]'

arr.constructor===Array

arr.__proto__==Array.prototype

Array.isArray(arr)