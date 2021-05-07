/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0
  let i = 0, j = 1
  while (j < nums.length) {
    if (nums[i] === nums[j]) {
      j++
    } else if (nums[i] < nums[j]) {
      i++
      nums[i] = nums[j]
    }
  }
  nums.length = i+1
  return i+1
};
// @lc code=end
