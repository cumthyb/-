/*
给定一个字符串 (s) 和一个字符模式 (p)。实现支持 '.' 和 '*' 的正则表达式匹配。

'.' 匹配任意单个字符。
'*' 匹配零个或多个前面的元素。
匹配应该覆盖整个字符串 (s) ，而不是部分字符串。

说明:

s 可能为空，且只包含从 a-z 的小写字母。
p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。
示例 1:

输入:
s = "aa"
p = "a"
输出: false
解释: "a" 无法匹配 "aa" 整个字符串。
示例 2:

输入:
s = "aa"
p = "a*"
输出: true
解释: '*' 代表可匹配零个或多个前面的元素, 即可以匹配 'a' 。因此, 重复 'a' 一次, 字符串可变为 "aa"。
示例 3:

输入:
s = "ab"
p = ".*"
输出: true
解释: ".*" 表示可匹配零个或多个('*')任意字符('.')。
示例 4:

输入:
s = "aab"
p = "c*a*b"
输出: true
解释: 'c' 可以不被重复, 'a' 可以被重复一次。因此可以匹配字符串 "aab"。
示例 5:

输入:
s = "mississippi"
p = "mis*is*p*."
输出: false

*/


/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  if (s === null) {
    return false
  }
  if (p === null) {
    return false
  }
  if (s.length === 0 && p.length === 0) {
    return true
  }

  let regStr = ''
  for (let index = 0; index < p.length; index++) {
    const element = p[index];
    if (element === '.') {
      regStr+='.'
    } else if(element === '*') {
      regStr=`${regStr}*`
    }else {
      regStr+=element
    }
  }
  let reg=new RegExp(`^${regStr}$`)
  return Boolean(reg.exec(s))
};


console.log(isMatch('aa','a'));
console.log(isMatch('aa','a*'));
console.log(isMatch('ab','.*'));
console.log(isMatch('aab','c*a*b*'));
console.log(isMatch('mississippi','mis*is*p*.'));

module.exports = isMatch
