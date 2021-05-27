/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length <= 1) return true
  if (nums[0] === 0) return false
  const index = nums.indexOf(0)
  if (index === -1) return true
  if (index === nums.length - 1) return true
  let i = 1
  let n = nums[0]
  while (i < nums.length) {
    n--
    if (n < nums[i] && n >= 0) {
      n = nums[i]
    }
    i++
  }
  return n >= 0
};
// @lc code=end

// 贪心
// 计算在当前下标的最大步数


// 测试用例
console.log(canJump([2, 0, 0]));
// true
console.log(canJump([2, 0, 1, 0, 1]));
// false
console.log(canJump([1, 2, 0, 1]));
// true
console.log(canJump([3, 4, 0, 1, 0, 0, 3, 0]));
// false

