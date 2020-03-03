
function bubble_sort(arr) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
}

let arr = [3, 1, 5, 7, 2, 4, 9, 6, 10, 8,-1];
bubble_sort(arr);
console.log(arr);