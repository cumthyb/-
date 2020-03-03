const getType = opt => Object.prototype.toString.call(opt)

function isEqual(opt1, opt2) {
  if (opt1 === opt2) {
    return true
  }

  if (getType(opt1) !== getType(opt2)) {
    return false
  }

  if (typeof opt1 !== 'object') {
    return opt1 === opt2
  }

  if (Array.isArray(opt1)) {
    if (opt1.length !== opt2.length) {
      return false
    }
  }

  const len1 = Object.keys(opt1).length
  const len2 = Object.keys(opt2).length
  if (len1 !== len2) {
    return false
  }

  for (const key in opt1) {
    if (opt1.hasOwnProperty(key)) {
      var equal = isEqual(opt1[key], opt2[key])
      if (!equal) {
        return false
      }
    }
  }

  return true
}


var opt1 = {
  a: 100,
  b: 200,
  c: [1, 3, 2],
  d: {
    e: 'e',
    f: NaN,
  }
}

var opt2 = {
  a: 100,
  b: 200,
  c: [1, 2, 3],
  d: {
    e: 'e',
    f: NaN,
  }
}

var equal = isEqual(opt1, opt2)
// var equal = isEqual(NaN, NaN)
console.log(equal)