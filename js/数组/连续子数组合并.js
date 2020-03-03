/**
 * [1,2,3,4,6,7,9,13,15]=>['1->4',6->7,'9','13','15']实现一下
 */

function mergeArray(arr) {
  const res = []
  var i = 0;
  var j = null;
  while (i < arr.length) {
    j = i + 1
    while (j < arr.length && (arr[j] === arr[i] + j - i)) {
      j++
    }
    j--

    if (i === j) {
      res.push(arr[i])
      i++
    } else {
      res.push(`${arr[i]}->${arr[j]}`)
      i = j + 1
    }

    if (j === arr.length - 1) {
      break;
    }
  }

  return res
}

var res = mergeArray([1, 2, 3, 4, 6, 7, 9, 13, 15])
console.log(res)