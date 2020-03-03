// 给定一个长度为N的数组，找出出现次数大于n/2，n/3的数，
// 要求时间复杂度O（n），空间复杂度O(1)


function find(arr) {
  var num, count = 1;
  arr.forEach(item => {
    if (item === num) {
      count++
    }
    else {
      if (count === 0) {
        num = item;
        count++
      } else {
        count--
      }
    }
  })


  return count ? num : null
}

var arr = [1, 2]

var res = find(arr)
console.log(res)