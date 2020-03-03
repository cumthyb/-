function getDeepOfArr(arr) {
  if (!Array.isArray(arr)) {
    return 0
  } else {
    let tmp = []
    arr.forEach(item => {
      tmp.push(getDeepOfArr(item))
    })
    return 1 + Math.max(...tmp)
  }
}

var arr = [
  1,
  [2, 3, [4, [5, 6,[11]], 7], [8, 9]],
  10
]

var res = getDeepOfArr(arr)
console.log(res)