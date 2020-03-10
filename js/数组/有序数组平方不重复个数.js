// 给你一个有序整数数组，数组中的数可以是正数、负数、零，
// 请实现一个函数，这个函数返回一个整数：
// 返回这个数组所有数的平方值中有多少种不同的取值。举例：

// nums = {-1,1,1,1},

// 那么你应该返回的是：1。因为这个数组所有数的平方取值都是1，只有一种取值

// nums = {-1,0,1,2,3}

// 你应该返回4，因为nums数组所有元素的平方值一共4种取值：1,0,4,9

// 在往下看之前，请先进行思考，如果当时是你在面试，你会给出什么样的结题思路？下面会给出两种解法，最优解：时间复杂度：O(n)、空间复杂度O(1)。


/**
 * 有序数组-双指针
 */

function getPureNum(arr){
  let p1=0
  let p2=p1+1
  let res=1
  while(p2<arr.length){
    let num1=Math.abs(arr[p1])
    let num2=Math.abs(arr[p2])
    if (num1!=num2) {
      p2++
      res++
    }else{
      p1=p2
      p2++
    }
  }
  return res
}

console.log(getPureNum([-1,1,1,1]))
console.log(getPureNum([-1,0,1,2,3]))