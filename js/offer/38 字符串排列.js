/**
题目：
输入一个字符串，打印出该字符的所有排序
*/


/**
思路：
1、把字符串分为两部：一部分是字符串的第一个字符；另一个部分是第一个字符以后的所有字符
2、拿第一个字符和它后面的字符逐个交换
*/

var str = 'abcd'

function permutation(str) {
  if (!str) {
    return str;
  }
  let result = [];
  let arr = str.split("");
  permutationCore(arr, 0, result);
  return [...new Set(result)].sort();
}

function permutationCore(arr, index, result) {
  if (index === arr.length) {
    result.push(arr.join(''));
  } else {
    for (let i = index, len = arr.length; i < len; i++) {
      [arr[index], arr[i]] = [arr[i], arr[index]];
      permutationCore(arr, index + 1, result);
      [arr[index], arr[i]] = [arr[i], arr[index]];// 还原arr不变，以供下一次循环使用
    }
  }
}

var res = permutation(str)
console.log(res)