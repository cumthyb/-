function findSubArr(target) {
  let mid = Math.ceil(target / 2)
  let res = []
  for (var end = 2; end <= mid; end++) {
    for (var start = 1; start < end; start++) {
      var sum = (end + start) * (end - start + 1) / 2
      if (sum === target) {
        res.push([start, end])
      }
    }
  }
  return res
}

let res = findSubArr(15)
console.log(res)