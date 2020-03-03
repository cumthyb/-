/*
题目：
给你一根长度为n的绳子，请把绳子剪成m段(m、n都是整数，n>1并且m>1)
要求：
每段绳子的长度的最大乘积是多少？
*/


/*
动态规划：
当前的最优解，可以从之前的最优解中找到。
假设f(n)表示长度为n的绳子的每段绳子的最大乘积，f(n)=max(f(n-i)*f(i)),i取值范围是1~n-1
*/

function cutLine(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;
  if (n === 3) return 3;

  let maxProduct = [0, 1, 2, 3],
    max = 0;

  for (let i = 4; i <= n; ++i) {
    max = 0;//每次重新计算最大值，虽然最大值肯定会增加，但还是需要重置
    for (let j = 1; j < i; ++j) {
      if (maxProduct[i - j] * maxProduct[j] > max) {
        max = maxProduct[i - j] * maxProduct[j];
      }
    }
    maxProduct[i] = max;
  }

  return maxProduct.pop();
}

console.log(cutLine(8))


