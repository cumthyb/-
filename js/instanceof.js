function _instanceof(L, R) {
  var RP = R.prototype
  var LP = L.__proto__
  while (true) {
    if (LP === null) {
      return false
    }
    if (LP === RP) return true;
    LP = LP.__proto__
  }
}

function child() { }
function father() { }
child.prototype = new father()
var d = new child()

console.log(_instanceof(d,father))
console.log(_instanceof(d,child))