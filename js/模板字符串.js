var reg = /\$\{(.+?)\}/g
var str = 'string text ${name} -- ${age}string text'

function formatStr(str, obj) {
  var reg = /\$\{(.+?)\}/g
  return str.replace(reg, function (m, p1, p2, p3) {
    return obj[p1]
  })
}
