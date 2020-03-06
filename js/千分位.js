var str = '12345678.0023'
var reg=/\B(?<!\d?\.\d?)(?=(\d{3})+\b)/g


console.log(str.replace(reg, ','))