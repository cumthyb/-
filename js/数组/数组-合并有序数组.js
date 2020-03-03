var arr1 = [100, 56, 23, 78, 54, 12, 88].sort((a, b) => b - a)
var arr2 = [23, 12, 52, 65, 99, 32, 87, 78, 45].sort((a, b) => b - a)


function concat(arr1, arr2) {
  let len1 = arr1.length
  let len2 = arr2.length
  let i = 0;
  let j = 0;
  let k = 0;
  let res = []

  while (i < len1 && j < len2) {
    if (arr1[i] >= arr2[j]) {
      res[k++] = arr1[i++]
    } else {
      res[k++] = arr2[j++]
    }
  }

  while (i < len1) {
    res[k++] = arr1[i++]
  }

  while (j < len2) {
    res[k++] = arr2[j++]
  }

  return res
}

console.log(arr1);
console.log(arr2);

let res = concat(arr1, arr2)

console.log(res);

console.log(arr1.length, arr2.length, res.length);


