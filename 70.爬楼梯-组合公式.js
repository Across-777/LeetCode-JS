/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
// 计算组合公式值
function combination(m, n) {
  return (factorial(n) / (factorial(m) * factorial(n - m)))
}
// 计算阶乘值
function factorial(n) {
  let sum=1
  for(let i=1;i<=n;i++){
    sum*=i
  }
  return sum
}
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let sum = 1
  for (let i = 1; n - 2*i >= 0; i++) {
    sum += combination(i, n - i)
  }
  return sum
};
// @lc code=end

//  需了解 组合公式

