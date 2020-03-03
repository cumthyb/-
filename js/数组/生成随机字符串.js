// 生成随机字符串

function getRadnom(len) {
  const map = '0123456789qwertyuiopasdfghjklzxcvbnm'
  const mapLen = map.length
  const res = []
  for (let index = 0; index < len; index++) {
    let char = map[Math.floor(Math.random() * mapLen)]
    res.push(Math.random() < 0.5 ? char.toUpperCase() : char.toLowerCase())
  }
  return res.join('')
}

// console.log(getRadnom(200));




// var obj = {}
// b = { a: 123 }
// c = { b: 123 }
// obj[b] = 123
// console.log(obj[b])

var length = 10;
function fn() {
  console.log(this.length)
}

var obj = {
  length: 5,
  method: function (fn) {
    fn();
    arguments[0]();
  }
}
obj.method(fn)