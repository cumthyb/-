function search(arr, target) {
  let start = 0, end = arr.length - 1;
  let getMid = (start, end) => Math.floor((start + end) / 2)
  let mid = getMid(start, end)
  while (end - start !== 1) {
    if (arr[start] === target) {
      return start
    }
    if (arr[end] === target) {
      return end
    }
    if (arr[mid] > target) {
      end = mid
      mid = getMid(start, end)
    } else if (arr[mid] === target) {
      return mid
    } else {
      start = mid
      mid = getMid(start, end)
    }
  }
}

var arr = [1, 5, 8, 9, 10, 12, 15, 20, 21, 22]
var res = search(arr, 21)
console.log(res)