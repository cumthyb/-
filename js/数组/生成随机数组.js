function getRandomArr(arr) {
  const len = arr.length
  const visited = []
  const getRandomIndex = (array) => Math.floor(Math.random() * array.length)
  let tmp = [...arr]
  while (visited.length < len) {
    let idx = getRandomIndex(tmp)
    visited.push(tmp.splice(idx, 1)[0])
  }
  return visited
}

function getRandomArr2(arr) {
  const visited = []
  const getRandomIndex = (len) => Math.floor(Math.random() * len)
  let tmp = [...arr]
  while (tmp.length) {
    let idx = getRandomIndex(tmp.length)
    visited.push(tmp[idx])
    tmp[idx] = tmp[tmp.length - 1]
    tmp.length--
  }
  return visited
}

/////////////////////////////test/////////////////////////////

var arr = [...Array(100000)].map((_, i) => i)

console.time('cost')
var res = getRandomArr(arr)
console.timeEnd('cost');

console.time('cost2')
var res2 = getRandomArr2(arr)
console.timeEnd('cost2');

// console.log(arr);
// console.log(res2.length);
// console.log(res2);
// console.log((new Set(res2)).size);