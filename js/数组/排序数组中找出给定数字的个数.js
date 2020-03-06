// 在排序数组中，找出给定数字的出现次数，
// 比如 [1, 2, 2, 2, 3] 中2的出现次数是3次

function getUpper(arr, key) {
  //获取某个元素最后出现位置 
  var low = 0, high = arr.length - 1;
  // console.log(high);
  var mid = Math.round((low + high) / 2);
  // console.log(mid);
  /*其实是一个递归迭代*/
  while (low <= high) {

    if (arr[mid] <= key) {
      //当要查找的值比中位数大于等于时，把查找的低位限制为mid+1
      low = mid + 1;
    } else {
      //当要找的值比 中位数小时，把查找的高位限制为mid-1 
      high = mid - 1;
    }
    mid = Math.round((low + high) / 2);

  }
  // 返回最后出现位置 
  return high;
}

function getLower(arr, key) {//获取某个元素第一次出现位置 
  var low = 0, high = arr.length - 1;
  var mid = Math.round((low + high) / 2);
  while (low <= high) {
    //当要找的值比 中位数小于等于时，把查找的高位限制为mid+1 
    if (arr[mid] >= key) {
      high = mid - 1;
    } else {
      //当要找的值比 中位数大时，，把查找的低位限制为mid+1 
      low = mid + 1;
    }
    mid = Math.round((low + high) / 2);
  }
  //返回第一次出现位置 
  return low;
}
      //   0  1  2  3  4  5  6  7  8  9
var arr = [0, 1, 1, 2, 2, 2, 2, 4, 4, 4]; //测试数组 
var key = 4;
var higher = getUpper(arr, key);
var lower = getLower(arr, key);
console.log(higher - lower + 1);
