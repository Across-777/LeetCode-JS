/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if(needle){
    return haystack.indexOf(needle)
  }
  return 0
};
// @lc code=end

// 需学习KMP算法 - 用 KMP 算法解
