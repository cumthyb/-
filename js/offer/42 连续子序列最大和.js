
function search(arr) {
  var subArr = [arr[0]] // 当前最大和序列
  var subMaxArr = [arr[0]] // 记录最大和的子序列
  var maxSum = arr[0],
    sum = arr[0];
  for (var i = 0, l = arr.length; i < l; i++) {
    // 若以当前位置结尾的子序列的其他值的和为负数，则直接舍弃前面的序列，
    // 因为无论该值怎么样，加上负数后可能会更小
    if (sum < 0) {
      sum = arr[i]; 
      subArr = [arr[i]]
    } else {
      sum += arr[i];
      subArr.push(arr[i])
    }

    if (sum > maxSum) {
      maxSum = sum;
      subMaxArr = [].concat(subArr)
    }
  }
  return maxSum;
}

var arr = [-2, 6, -1, 5, 4, -7, 2, 3];
console.log(search(arr));  // 14