/*
题目：
把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
要求：
输入一个递增的排序数组的一个旋转，输出旋转数组的最小元素。
[3,4,5,1,2]
*/


//不考虑旋转和递增的特性，直接暴力。复杂度O(n)
function findMin(arr) {
  let min = arr[0];
  for (let i = 1, len = arr.length; i < len; ++i) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

//考虑递增的特性，旋转之后会出现阶跃,复杂度也是O(n),最好情况是一次就行
function findMin(arr) {
  for (let i = 1, len = arr.length; i < len; ++i) {
    if (arr[i] - arr[i - 1] < 0) {
      return arr[i];
    }
  }
}



/**
 * 二分查找
 * [4,5,6,7,8,10,15,0,1,2,3]
 */

function findMin(arr) {
  let start = 0, end = arr.length - 1;
  let getMid = (start, end) => Math.floor((start + end) / 2)
  let mid = getMid(start, end)
  // 升序情况下继续变换start end 查找
  while (arr[mid - 1] < arr[mid] && arr[mid] < arr[mid + 1]) {
    if (arr[start] < arr[mid] && arr[mid] > arr[end]) {
      start = mid
      mid = getMid(start, end)
    } else if (arr[start] > arr[mid] && arr[mid] < arr[end]) {
      end = mid
      mid = getMid(start, end)
    }
  }
  if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
    return mid + 1
  }
  return mid
}

var arr = [4, 5, 6, 7, 8, 10, 15, 16, 17, 180, 1, 2, 3]
var arr = [3, 4, 5, 1, 2]
var mid = findMin(arr)
console.log(mid, arr[mid])