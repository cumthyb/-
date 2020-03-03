/*
给定一副牌，每张牌上都写着一个整数。

此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：

每组都有 X 张牌。
组内所有的牌上都写着相同的整数。
仅当你可选的 X >= 2 时返回 true。

 

示例 1：

输入：[1,2,3,4,4,3,2,1]
输出：true
解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]
示例 2：

输入：[1,1,1,2,2,2,3,3]
输出：false
解释：没有满足要求的分组。
示例 3：

输入：[1]
输出：false
解释：没有满足要求的分组。
示例 4：

输入：[1,1]
输出：true
解释：可行的分组是 [1,1]
示例 5：

输入：[1,1,2,2,2,2]
输出：true
解释：可行的分组是 [1,1]，[2,2]，[2,2]

提示：

1 <= deck.length <= 10000
0 <= deck[i] < 10000

*/

/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  let map = {}
  deck.map(item => {
    if (map[item]) {
      map[item] += 1
    } else {
      map[item] = 1
    }
  })
  let countArr = Object.values(map).sort()
  let count = countArr.length
  if (countArr[0] === 1) {
    return false
  }
  if (deck.length == 1 && count === 1) {
    return false
  }

  // 此时group已经存放的是每张牌的总数了（数组只遍历一遍，避免了排序和正则的耗时）
  // 求两个数的最大公约数
  let gcd = (a, b) => {
    if (b === 0) {
      return a
    } else {
      return gcd(b, a % b)
    }
  }
  while (countArr.length > 1) {
    let a = countArr.shift()
    let b = countArr.shift()
    let v = gcd(a, b)
    if (v === 1) {
      return false
    } else {
      countArr.unshift(v)
    }
  }

  console.log(countArr)
  return countArr.length ? countArr[0] > 1 : false
};

console.log(hasGroupsSizeX([1, 1, 1, 1, 2, 2, 2, 2, 2, 2]));

module.exports = hasGroupsSizeX
