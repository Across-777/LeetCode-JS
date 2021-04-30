/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let str=String(x);
  let l=str.length%2==0?str.length/2:str.length/2 +1;
  let isFlag=true;
  for(let i=0;i<l;i++){
    if(str.charAt(i)!=str.charAt(str.length-i-1)){
      isFlag= false;
      break;
    }
  }
  return isFlag;
};
// @lc code=end

// 12345