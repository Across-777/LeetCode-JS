/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const str= s.replace(/\W|_/g,'').toLowerCase()
  const arr= str.split('')
  const len = str.length-1
  const n= Math.floor(str.length/2) 
  for(let i=0;i<=n;i++){
    if(arr[i]!==arr[len-i]){
      return false
    }
  }
  return true
};
// @lc code=end

/* 
测试用例
"A man, a plan, a canal: Panama"
"ab_a"
注意点：正则表达式 /W 指的是除 数字 字母 和 下划线 以外的
*/
// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("ab_a"))