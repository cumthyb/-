/**
 * [1,2,3,4,5]
 */

function moveOddBeforeEven(arr) {
  if (arr.length < 2) {
    return arr
  }

  const isOdd = val => val % 2 === 1

  let p1 = 0;
  let p2 = arr.length - 1
  var v1, v2;

  while (p1 < p2) {
    v1 = arr[p1]
    v2 = arr[p2]

    if (isOdd(v1) && !isOdd(v2)) {
      // 奇数-偶数
      p1++
      p2--
    } else if (isOdd(v1) && isOdd(v2)) {
      // 奇数-奇数
      p1++
    } else if (!isOdd(v1) && !isOdd(v2)) {
      // 偶数-偶数
      p2--
    } else if (!isOdd(v1) && isOdd(v2)) {
      // 偶数-奇数
      [arr[p1], arr[p2]] = [arr[p2], arr[p1]]
      p1++
      p2--
    }
  }

}

var arr = [2, 4, 6, 1, 3, 5, 9]
moveOddBeforeEven(arr)
console.log(arr)