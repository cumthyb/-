// 8,1,2,5,9,3,4,6,7,0

function insertOrder(arr) {
  let res = [arr.pop()]
  while (arr.length) {
    res.push(arr.pop())
    for (var i = res.length - 1; i > 0; i--) {
      if (res[i] < res[i - 1]) {
        [res[i], res[i - 1]] = [res[i - 1], res[i]]
      } else {
        break
      }
    }
  }
  return res
}

var arr = [8, 1, 2, 5, 9, 3, 4, 6, 7, 0]
var res = insertOrder(arr)
console.log(res)