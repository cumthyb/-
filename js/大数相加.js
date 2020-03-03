/**
 * 两个大树相加
 */

function add(num1, num2) {
  const getNum = (str, index) => Number(str[index] || 0)
  const num2ReverseStr = num => num.toString().split('').reverse().join('')
  const numStr1 = num2ReverseStr(num1)
  const numStr2 = num2ReverseStr(num2)
  let [{ length: len1 }, { length: len2 }] = [numStr1, numStr2]
  let res = []
  let count = 0
  let tmp = 0

  while (count <= len1 && count <= len2) {
    var sum = getNum(numStr1, count) + getNum(numStr2, count) + tmp
    tmp = ~~(sum / 10)
    res.unshift(sum % 10)
    count++
  }
  if (tmp !== 0) {
    res.unshift(tmp)
  }
  return res.join('')
}

var sum = add(123, 9999)
console.log(sum)


/**
 * 多个大数相加
 */
function mutilAdd(...args) {
  const getNum = (str, index) => Number(str[index] || 0)
  const num2ReverseStr = num => num.toString().split('').reverse().join('')

  const parms = args.map(item => num2ReverseStr(item))
  
  let index = 0
  let res = []
  let tmp = 0

  while (!parms.every(item => item[index] === undefined)) {
    var sum = parms.reduce((acc, item) => {
      acc += getNum(item, index)
      return acc
    }, tmp)
    tmp = ~~(sum / 10)
    res.unshift(sum % 10)
    index++
  }
  if (tmp !== 0) {
    res.unshift(tmp)
  }
  return res.join('')
}

var sum = mutilAdd(123, 9999,888896,2)
console.log(sum)