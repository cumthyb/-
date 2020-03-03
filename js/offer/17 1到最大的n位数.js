/*
题目：
输入数字n，按顺序打印出从1到最大的n位十进制数
例如：
输入3，则打印出1,2,3一直打最大的三位数
*/


/**
 * 考虑n比较大时会溢出
 */


/**
 * 模拟加法(类似大数相加)
 */
function printNum1(n) {
  let sumArr = (new Array(n)).fill(0)
  let numArr2 = (new Array(n - 1)).fill(0)
  numArr2.push(1)
  while (sumArr.some(item => item !== 9)) {
    addArray(sumArr, numArr2)
    // console.log(sumArr.join('').replace(/^0*/g, ''))
  }

}

function addArray(arr1, arr2) {
  let len = arr1.length
  let tmp = 0
  var sum = 0
  for (var i = len - 1; i >= 0; i--) {
    sum = arr1[i] + arr2[i] + tmp
    arr1[i] = sum % 10
    tmp = ~~(sum / 10)
  }
}
console.time('time1')
printNum1(3)
console.timeEnd('time1')


/**
 * 递归 全排列
 */

let res = []
function printNum2(n) {
  let res_n = []
  if (n === 1) {
    res_n = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  }

  if (n >= 2) {
    let n_1 = printNum2(n - 1)
    for (var i = 0; i < n_1.length; i++) {
      for (var j = 0; j <= 9; j++) {
        res_n.push(n_1[i] + j)
      }
    }
  }
  res = res.concat(res_n)
  return res_n
}

console.time('time2')
printNum2(3)
console.timeEnd('time2')

// console.log(res)