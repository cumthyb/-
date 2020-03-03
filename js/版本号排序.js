
// var versions=['1.45','1.5','6'','3.3.3.3'] 
// 从小到大排序 结果[1.5,1.45,3.3.3.3,6]

function compare(v1, v2) {
  let len = Math.min(v1.length, v2.length)
  for (let i = 0; i < len; i++) {
    let tmp1 = parseInt(v1[i])
    v1.shift()
    let tmp2 = parseInt(v2[i])
    v2.shift()
    if (tmp1 < tmp2) {
      return -1
    }
    else if (tmp1 > tmp2) {
      return 1
    }
    else {
      return compare(v1, v2)
    }
  }
  return v1.length - v2.length
}

var versions = ['1.5.1', '1.5', '6', '3.3.3.3']

let f = versions.sort((v1, v2) => {
  return compare(v1.split('.'), v2.split('.'))
})

console.log(versions);