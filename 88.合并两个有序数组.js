/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  if (n === 0) return
  let i = m
  let j = 0
  while (i < m + n) {
    nums1[i] = nums2[j]
    i++
    j++
  }
  nums1.sort((a, b) => a - b)
};
// @lc code=end
