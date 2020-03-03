/**
 * 单词首字母大写
 */

var str = 'good good study,day  day up'
var reg = /(?<=\b)([a-zA-Z])/g

var res = str.replace(reg, (m, p1) => {
  // console.log(m)
  // console.log(p1)
  return p1.toUpperCase()
})
// console.log(res)




/**
 * 字符串中哪个字母出现次数最多,多少次
 */

// 1 循环 map


// 2 字符排序 正则


var str = 'good good study,day  day up！oops！'
var arr = [...new Set(str.split(''))];
var max = 0;
var code = '';
for (var i = 0; i < arr.length; i++) {
  //创建正则匹配字符
  var reg = new RegExp(arr[i], 'g');
  //利用match找出对应字符在中字符串中出现的地方，取匹配的返回数组的长度，即是对应字符串出现的次数
  var val = (str.match(reg) || []).length;
  //更新出现次数最高的字符与次数
  if (val > max) {
    max = val;
    code = arr[i];
  } else if (val == max) {  //处理不同字符出现次数相同的情况
    code = `${code}、${arr[i]}`;
  }
}
console.log(code, max)


var str = 'good good studyd,day  dady upd！oodps！'
var sortStr = str.split('')
  .sort((a, b) => a.localeCompare(b))
  .join('');

var match = sortStr.match(/([a-zA-Z])\1+/g)
console.log(match)

match.sort((a, b) => b.length - a.length)
console.log(match)


// 3 正则
var str = 'good good study,day  day upd！oops！'
var sortStr = str.split('')
  .sort((a, b) => a.localeCompare(b))
  .join('');

var max = null;
var res = []

for (var i = str.length - 1; i > 1; i--) {
  var reg = new RegExp(`([a-zA-Z])\\1{${i - 1}}`, 'g')
  var match = sortStr.match(reg)
  if (match) {
    max = i;
    res = match;
    break;
  }
}

console.log(max, res)


// 4 正则

var str = 'good good study,day  day upd！oops！'

var max = null,
  res = [];
var len = 0
var first = ''
var count = 0

while (str !== '') {
  len = str.length;
  first = str[0]
  var reg = new RegExp(first, 'g')
  str = str.replace(reg, '')
  count = len - str.length
  if (max < count) {
    max = count
    res = [first]
  } else if (max === count) {
    res.push(first)
  }
}

console.log(max, res)




/**
 * 时间字符串格式化 2020年12月01日 12时23分34秒
 */

var str = '2020/12/01 12:23:34'

function formatTime(str,
  template = '{0}年{1}月{2}日 {3}时{4}分{5}秒') {
  let timeArr = str.match(/\d+/g)

  return template.replace(/\{(\d+)\}/g, (match, $1) => {
    return timeArr[$1] || '00'
  })
}

console.log(formatTime(str))

str = '2020/12/01'
console.log(formatTime(str))


var str='123456789.2356'
// 123,456,789.235,6
var reg=/\B(?<!(\.\d+))(?=(\d{3})+\b)/g

var res=str.replace(reg,',')
console.log(res)// 123,456,789.2356