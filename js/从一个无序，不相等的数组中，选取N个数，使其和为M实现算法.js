var k = 0

function kSum(arr, n, sum) {
  if (n < 0 || sum < 0) {
    return
  }

  if (k > 0) {
    if (sum == a[n - 1]) {
      let str = ''
      for (var i = k - 1; i >= 0; i++) {
        str += `${res[i]},`
      }
      console.log(str)
    }
  }


}
