/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=step
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (nums.length <= 1) return 0
  if (nums.length == 2) return 1
  if (nums[0] >= nums.length - 1) return 1
  let step = nums[0]
  let endIndex = nums[0]
  let maxIndex = 0
  let max = 0
  let i = 0
  let times = 1
  while (i <= endIndex) {
    if (nums[i] - step + i > max) {
      max = nums[i] - step + i
      maxIndex = i
    }
    if (i === endIndex) {
      i = maxIndex - 1
      step = nums[maxIndex]
      endIndex = nums[maxIndex] + maxIndex
      times++
      max=0
      if (endIndex >= nums.length - 1) {
        return times
      }
    }
    i++
  }
};
// @lc code=end

// console.log(jump([1,2,1,1,1]));
// // 3
// console.log(jump([3, 2, 1]));
// // 1
// console.log(jump([1,2]));
// // 1
// console.log(jump([1,2,3]));
// // 2
// console.log(jump([2,3,0,1,4]));
// // 2
// console.log(jump([7,0,9,6,9,6,1,7,9,0,1,2,9,0,3]));
// // 2