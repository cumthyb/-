/*
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。


示例:

输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
说明:
尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。

*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) {
    return []
  }
  const letterDigitsMap = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  }
  let result = [];
  result = [].concat(letterDigitsMap[digits[0]])
  debugger
  for (let index = 1; index < digits.length; index++) {
    let count = result.length
    let rightLetters = letterDigitsMap[digits[index]]
    let rightCount = rightLetters.length
    let tmp = []
    for (let j = 0; j < count; j++) {
      for (let k = 0; k < rightCount; k++) {
        tmp.push(result[j] + rightLetters[k])
      }
    }
    result = tmp
    tmp = []
    rightCount = 0
    rightLetters = []
  }
  return result
};

console.log(letterCombinations('23'));

module.exports = letterCombinations