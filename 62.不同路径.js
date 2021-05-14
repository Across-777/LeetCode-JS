/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  // const arr=[m][n]
  if (m === 1 || n === 1) return 1
  const max=Math.max(m,n)
  const min=Math.min(m,n)
  // console.log(max,min);
  const a = Array(max).fill(1).map(() => Array(min).fill(1))
  // console.log(a);
  for (let i = 1; i < max; i++) {
    for (let j = 1; j < min; j++) {
      a[i][j] = a[i - 1][j] + a[i][j - 1]
    }
  }
  // console.log(a);
  return a[max-1][min - 1]
};
// @lc code=end

// console.log(uniquePaths(6, 3));
// a[m][n]=a[m-1][n]+a[m][n-1]