
function quick_sort(arr) {
  let len = arr.length
  if (len <= 1)
    return arr

  let flag = arr[0]
  let left = []
  let right = []
  for (let i = 1; i < len; i++) {
    if (arr[i] > flag) {
      right.push(arr[i])
    }
    else {
      left.push(arr[i])
    }
  }
  return [...quick_sort(left), flag, ...quick_sort(right)]
}


////------------------------------------------------------------------------
// 分区
// [8, 1, 2, 12, 7, 6, 4, 9, 6, 10, 11];
// [8, 1, 2, 7, 12, 6, 4, 9, 6, 10, 11];
// [8, 1, 2, 7, 6, 12, 4, 9, 6, 10, 11];
// [8, 1, 2, 7, 6, 4, 12, 9, 6, 10, 11];
// [8, 1, 2, 7, 6, 4, 6, 9, 12, 10, 11];
// [6, 1, 2, 7, 6, 4, 8, 9, 12, 10, 11];

function partition(arr, start, end) {
  let flag = arr[start]
  let index = start + 1
  for (var i = index; i <= end; i++) {
    if (arr[i] <= flag) {
      swap(arr, i, index)
      index++
    }
  }
  swap(arr, start, index - 1)
  return index - 1
}

function swap(arr, index1, index2) {
  if (index1 < 0
    || index2 < 0
    || index1 > arr.length - 1
    || index2 > arr.length - 1) {
    return
  }
  if (index1 === index2) {
    return
  }
  else {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
  }
}

function quick_sort2(arr, left, right) {
  if (left < right) {
    if (arr.length > 1) {
      let index = partition(arr, left, right)
      quick_sort2(arr, left, index - 1)
      quick_sort2(arr, index + 1, right)
    }
  }
}


////------------------------------------------------------------------------
// 双指针
// 更容易理解
function quick_sort3(arr, left, right) {
  let flag = arr[left]
  let i = left + 1, j = right
  while (i < j) {
    while (i < j && arr[i] <= flag) {
      i++
    }

    while (i < j && arr[j] >= flag) {
      j--
    }

    if (i < j) {
      swap(arr, i, j)
      i++
      j--
    }
  }
  
  if (i <= j) {
    swap(arr, left, i - 1)
    quick_sort3(arr, left, i - 1)
    quick_sort3(arr, j, right)
  }
}



////------------------------------------------------------------------------
var arr = [8, 1, 2, 12, 7, 6, 4, 9, 6, 10, 11];
let res = quick_sort3(arr, 0, arr.length - 1);
console.log(arr);
