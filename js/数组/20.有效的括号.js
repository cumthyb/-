/*
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:

输入: "()"
输出: true
示例 2:

输入: "()[]{}"
输出: true
示例 3:

输入: "(]"
输出: false
示例 4:

输入: "([)]"
输出: false
示例 5:

输入: "{[]}"
输出: true

*/

/**
 * @param {number} n
 * @return {string[]}
 */
var isValid = function (s) {
  if (!s) return true
  if (s.length % 2 === 1) {
    return false
  }
  if (s.match(/[^\(\)\[\]\{\}]/)) {
    return false
  }
  if (!s.includes('()') && !s.includes('[]') && !s.includes('{}')) {
    return false
  }
  let stack = []
  let valid = true
  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    if ('([{'.includes(element)) {
      stack.unshift(element)
    }
    else {
      if (stack.length === 0) {
        valid = false
        break
      }
      let top = stack.shift()
      if (element === ')' && top !== '(') {
        valid = false
        break
      } else if (element === ']' && top !== '[') {
        valid = false
        break
      } else if (element === '}' && top !== '{') {
        valid = false
        break
      }
    }
  }
  if (stack.length !== 0) {
    valid = false
  }
  return valid
};

console.log(isValid('()()()[]ss'));

module.exports = isValid
