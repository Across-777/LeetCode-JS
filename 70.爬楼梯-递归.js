/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
// 已知的递归终止条件条件
// n =1   f(n) =1
// n =2   f(n) =2
const m = new Map([
  [1, 1],
  [2, 2],
]);
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (m.has(n)) {
    return m.get(n)
  }
  const res = climbStairs(n - 1) + climbStairs(n - 2)
  m.set(n, res)
  return res
};
// @lc code=end

/*
若是只单纯的迭代则会超时
因为有很多计算会被重复许多遍
我们可以用一个数据结构，将 n 和计算好的结果 一起存入
循环时需要用到 n 的结果值可以先查是不是存在，存在就直接用，不存在再计算
*/
