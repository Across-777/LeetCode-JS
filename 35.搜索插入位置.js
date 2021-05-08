/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 简单粗暴法
var searchInsert = function(nums, target) {
  let i=0
  while(i<nums.length){
    if(nums[i]>=target){
      break;
    }
    i++
  }
  return  i
};
// @lc code=end

// 需学习 二分法 有更优解 