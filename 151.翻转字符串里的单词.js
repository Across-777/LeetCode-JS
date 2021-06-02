/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let arr=s.split(' ').filter( item => item!==''?true:false).reverse()
  return arr.join(' ')
};
// @lc code=end

// console.log(reverseWords("the sky is blue"));
// console.log(reverseWords('  hello world  '));
// console.log(reverseWords("  Bob    Loves  Alice   "));