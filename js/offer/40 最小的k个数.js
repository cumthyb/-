/**
题目：
输入n个整数，找出其中最小的k个数
*/

/**
思路一：先排序，然后在找出最小的。但是有可能数组很大，会超时
*/

/**
思路二：利用长度为K的数组，保存k个目前最小的数，然后每次找到里面的最大值和当前值作比较
*/

function findMinK(arr, k) {
  if (k < 1) {
    return null
  }
  if (k > arr.length) {
    return null
  }
  const arrMinK = arr.splice(0, k)
  const getMax = arr => Math.max(...arr)
  for (var i = 0; i < arr.length; i++) {
    var max=getMax(arrMinK)
    if (arr[i]<max) {
      let idx=arrMinK.indexOf(max)
      arrMinK.splice(idx,1,arr[i])
    }
  }
  return arrMinK
}

// console.log(findMinK([4,5,1,6,2,7,3,8], 2));



/**
 * 3. 快速排序思想，取第k个数作为基数，O(n),第一趟就可完成
 */

let quickTopK = function (arr, k) {
  if(k==0)return []
  if (arr.length < 2) return arr
  let midValue = arr.splice(0, 1), left = [], right = []
  arr.forEach((el) => {
      el > midValue ? left.push(el) : right.push(el)
  });
  if (left.length == k) {
      return left
  } else if (left.length > k) {
      return quickTopK(left, k)
  } else {
      return left.concat(midValue, quickTopK(right, k - left.length - 1))
  }
}
console.log(quickTopK([6, 0, 1, 4, 9, 7, -3, 1, -4, -8, 4, -7, -3, 3, 2, -3, 9, 5, -4, 0], 8))
////[ 9, 7, 9, 6, 5, 4, 4, 3 ]