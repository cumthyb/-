var arr1 = [100, 56, 23, 78, 54, 12, 88].sort((a, b) => b - a)
var arr2 = [23, 12, 52, 65, 99, 32, 87, 78, 45].sort((a, b) => b - a)


function concat(arr1, arr2) {
  let len1 = arr1.length
  let len2 = arr2.length
  let i = 0;
  let j = 0;
  let k = 0;
  let res = []

  while (i < len1 && j < len2) {
    if (arr1[i] >= arr2[j]) {
      res[k++] = arr1[i++]
    } else {
      res[k++] = arr2[j++]
    }
  }

  while (i < len1) {
    res[k++] = arr1[i++]
  }

  while (j < len2) {
    res[k++] = arr2[j++]
  }

  return res
}

// let res = concat(arr1, arr2)

// console.log(res);

/**
 * 原地合并
 */
function mergeSortedArr(arr1, arr2) {
  let ldx1 = arr1.length - 1
  let ldx2 = arr2.length - 1
  let p = arr1.length + arr2.length - 1
  while (ldx1 >= 0 && ldx2 >= 0) {
    if (arr1[ldx1] < arr2[ldx2]) {
      arr1[p] = arr1[ldx1]
      ldx1--
    } else {
      arr1[p] = arr2[ldx2]
      ldx2--
    }
    p--
  }
  while (ldx1 > 0) {
    arr1[p--] = arr1[ldx1--]
  }
  while (ldx2 > 0) {
    arr1[p--] = arr2[ldx2--]
  }
}

mergeSortedArr(arr1, arr2)

console.log(arr1);