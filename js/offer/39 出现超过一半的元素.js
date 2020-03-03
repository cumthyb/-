
/**
 * 1.排序，最中间的元素即是
 */


/**
 * 2.遍历所有元素，map
 */


/**
 * 3.遍历一遍，记录元素和次数，若下一个元素相同，则次数加1，若不同则次数减1,次数建委0时，替换为当前元素，次数替换为1
 * 若次数过半，则这个元素的个数比其他元素个数加起来还多
 *
 * /#endregion 
 */

function MoreThanHalfNum(arr) {
  let num = arr[0]
  let count = 1

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === num) {
      count++
    } else {
      count--
    }

    if (count === 0) {
      num = arr[i]
      count = 1
    }
  }
  if (count >= 1) {
    return num
  }
}

console.log(MoreThanHalfNum([1, 2, 2, 3, 4]));
