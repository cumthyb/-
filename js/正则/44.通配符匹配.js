/*
给定一个字符串 (s) 和一个字符模式 (p) ，实现一个支持 '?' 和 '*' 的通配符匹配。

'?' 可以匹配任何单个字符。
'*' 可以匹配任意字符串（包括空字符串）。
两个字符串完全匹配才算匹配成功。

说明:

s 可能为空，且只包含从 a-z 的小写字母。
p 可能为空，且只包含从 a-z 的小写字母，以及字符 ? 和 *。
示例 1:

输入:
s = "aa"
p = "a"
输出: false
解释: "a" 无法匹配 "aa" 整个字符串。
示例 2:

输入:
s = "aa"
p = "*"
输出: true
解释: '*' 可以匹配任意字符串。
示例 3:

输入:
s = "cb"
p = "?a"
输出: false
解释: '?' 可以匹配 'c', 但第二个 'a' 无法匹配 'b'。
示例 4:

输入:
s = "adceb"
p = "*a*b"
输出: true
解释: 第一个 '*' 可以匹配空字符串, 第二个 '*' 可以匹配字符串 "dce".
示例 5:

输入:
s = "acdcb"
p = "a*c?b"
输入: false

*/

// 正则表达式
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
    if (element === '?') {
      regStr += '.'
    } else if (element === '*') {
      regStr = `${regStr}(.+)?`
    } else {
      regStr += element
    }
  }
  let reg = new RegExp(`^${regStr}$`)
  return Boolean(reg.exec(s))
};


// 动态规划
var isMatch2 = function (s, p) {
  // '?' 可以匹配任何单个字符。
  // '*' 可以匹配任意字符串（包括空字符串）。
  // 'acdcb', 'a*c?b'
  let sLen = s.length
  let pLen = p.length
  let match = []
  for (let m = 0; m < pLen; m++) {
    match[m] = []
    for (let n = 0; n < sLen; n++) {
      match[m][n] = false
    }
  }

  var j = 1
  while (p[j - 1] === '*' && j <= pLen) {
    match[0][j] = true;
    j++
  }

  for (var j = 1; j < pLen; j++) {
    for (let i = 0; i < sLen; i++) {
      if (p[j - 1] === "*" && (match[i - 1][j] || match[i][j - 1] || match[i - 1][j - 1]))
        match[i][j] = true;
      else if (match[i - 1][j - 1] && (p[j - 1] == '?' || p[j - 1] == s[i - 1]))
        match[i][j] = true;
    }
  }
  return match[sLen-1][pLen-1];
}


// 回溯
let isMatch3 = (s, p) => {

  let i = 0;
  let j = 0;
  let star = -1;
  let k = 0; // 记录最后一次匹配的位置  + 1

  while (i < s.length) {
    if (s[i] == p[j] || p[j] == '?') {
      ++i;
      ++j;
      continue;
    }

    if (p[j] == '*') {
      star = j++;
      k = i;
      continue;
    }

    // 如果失配了，回溯到 k + 1，即让 * 再多吞噬一个字符。
    if (star != -1) {
      i = ++k;
      j = star + 1;
      continue;
    }
    return false;
  }

  while (j < p.length && p[j] == '*')
    ++j;

  return j == p.length;
}

// console.log(isMatch('aa', 'a'));
// console.log(isMatch('aa', '*'));
// console.log(isMatch('cb', '?a'));
// console.log(isMatch('adceb', '*a*b'));
// console.log(isMatch('acdcb', 'a*c?b'));
console.log(isMatch3("bbbbbbbabbaabbabbbbaaabbabbabaaabbababbbabbbabaaabaab", "b*b*ab**ba*b**b***bba"));

module.exports = isMatch
