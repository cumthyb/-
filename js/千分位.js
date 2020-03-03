var reg = /\B(?=(\d{3})+\b)/g
var str = '12345678'

console.log(str.replace(reg, ','))