const getType = obj => Object.prototype.toString.call(obj)

function isEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true
  }

  if (getType(obj1) !== getType(obj2)) {
    return false
  }

  if (typeof obj1 !== 'object') {
    return obj1 === obj2
  }

  if (Array.isArray(obj1)) {
    if (obj1.length !== obj2.length) {
      return false
    }
  }

  const len1 = Object.keys(obj1).length
  const len2 = Object.keys(obj2).length
  if (len1 !== len2) {
    return false
  }

  for (const key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      var equal = isEqual(obj1[key], obj2[key])
      if (!equal) {
        return false
      }
    }
  }

  return true
}


var obj1 = {
  a: 100,
  b: 200,
  c: [1, 3, 2],
  d: {
    e: 'e',
    f: NaN,
  }
}

var obj2 = {
  a: 100,
  b: 200,
  c: [1, 2, 3],
  d: {
    e: 'e',
    f: NaN,
  }
}

// var equal = isEqual(obj1, obj2)
var equal = isEqual(NaN, NaN)
console.log(equal)