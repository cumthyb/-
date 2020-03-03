/*
给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]

*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (!nums || nums.length < 3) {
    return []
  }
  let len = nums.length;
  nums.sort()
  if (nums[len - 1] < 0 || nums[0] > 0)
    return [];
  let map = {}
  let result = []
  nums.map((item, index) => {
    if (map[item]) {
      map[item].push(index)
    }
    else {
      map[item] = [index]
    }
  })
  for (let index = len - 1; index > 1; index--) {
    let opt1 = nums[index]
    for (let idx2 = index - 1; idx2 > 0; idx2--) {
      let opt2 = nums[idx2]
      let opt3 = (opt1 + opt2) * -1
      if (map[opt3] && map[opt3].length === 1 && map[opt3][0] != idx2) {
        result.push([opt1, opt2, opt3])
      }
      else if (map[opt3] && map[opt3].length > 1) {
        result.push([opt1, opt2, opt3])
      }
    }


  }
  return result
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

module.exports = threeSum