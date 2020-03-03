var str = '()'

function isMatch(str) {
  let stack = []
  let map = {
    '}': '{',
    ')': '(',
    ']': '[',
  }

  const len = str.length
  let rights = Object.keys(map)
  let lefts = Object.values(map)
  if (len % 2 === 1) {
    return false
  }

  if (lefts.includes(str[len - 1])) {
    return false
  }

  if (rights.includes(str[0])) {
    return false
  }

  stack.unshift(str[0])

  for (var i = 1; i < len; i++) {
    var opt = str[i]
    if (lefts.includes(opt)) {
      stack.unshift(opt)
    } else {
      var top = stack.shift()
      if (map[opt] !== top) {
        return false
      }
    }
  }

  if (stack.length !== 0) {
    return false
  }

  return true

}

console.log(isMatch(str))