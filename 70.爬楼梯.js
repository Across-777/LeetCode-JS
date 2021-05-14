/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if(n===1||n===2) return n
  let a=1,b=2,temp
  for(let i=3;i<=n;i++){
    temp=a+b
    a=b
    b=temp
  }
  return temp
};
// @lc code=end

// dp 动态规划
// 找规律：
// 当前的楼梯步数是前一级楼梯步数加上前两级的楼梯步数之和