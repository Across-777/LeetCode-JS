/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  if (s) {
    const arr = s.split(' ').filter(item => item)
    if(arr.length>0){
      return (arr[arr.length - 1]).length
    }
    return 0
  }
  return 0
};
console.log(lengthOfLastWord(' '));

// @lc code=end

