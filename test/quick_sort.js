function quick_sort(arr) {
  if (arr.length == 1) {
    return arr
  }
  let left = []
  let right = []
  let flag = arr[0]
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] <= flag) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return [...quick_sort(left), flag, ...quick_sort(right)]

}

/**
 * 双指针
 */
function quick_sort(arr) {
  if (arr.length == 1) {
    return arr
  }
  let flag = arr[0]

  let i = 1
  let j = arr.length - 1

  while (i < j) {
    while (arr[i] > flag) {
      i++
    }
    while (arr[j] <= flag) {
      j--
    }
    [arr[j], arr[i]] = [arr[i], arr[j]]
  }
  let left = arr.splice(1, i + 1)
  let right = arr.splice(j + 1)

  return [...quick_sort2(left), flag, ...quick_sort2(right)]

}