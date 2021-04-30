/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length == 0) {
    return '';
  }else if (strs.length == 1) {
    return strs[0];
  }else {
    let arr = [];
    let s1 = strs[0];
    let s2 = strs[1];
    for (let j = 0; j < Math.min(s1.length, s2.length); j++) {
      if (s1.charAt(j) == s2.charAt(j)) {
        // console.log('zz', s1.charAt(j), s2.charAt(j));
        arr.push(s1.charAt(j));
      }else{
        break;
      }
    }
    // console.log('123-', arr.join(''));
    if (arr.length == 0) return '';
    for (let i = 2; i < strs.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] != strs[i].charAt(j)) {
          arr.length = j;
          break;
        }
      }
      if (arr.length == 0) {
        break;
      }
    }
    return arr.join('');
  }
};
// @lc code=end

/**
 * 注意特殊值：0，1
 * 其他值循环即可
 */
