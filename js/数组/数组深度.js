var arr = [
  [0],
  3,
  [2, 3, 4, [9, 90, [89, 34, [98, 0, 0, [45, 8, 32]]]]],
  1,
  [1, [2, 3, [8, [10], 11]]]
]


function getDeep(arr) {
  if (!Array.isArray(arr)) {
    return 0
  } else {
    return 1 + Math.max(...arr.map(item => getDeep(item)))
  }
}

var deep = getDeep(arr)
console.log(deep)