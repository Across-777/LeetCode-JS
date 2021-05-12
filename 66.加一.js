/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for(let i=digits.length-1;i>=0;i--){
    if(digits[i]==9){
      digits[i]=0
      if(i===0){
        digits.unshift(1)
      }
    }else{
      digits[i]=digits[i]+1
      break
    }
  }
  return digits
};
// @lc code=end


// 简单写法
// 111/111 cases passed (80 ms)
// Your runtime beats 82.58 % of javascript submissions
// Your memory usage beats 76.69 % of javascript submissions (37.8 MB)

// var plusOne = function (digits) {
//   if (digits[digits.length - 1] < 9) {
//     digits[digits.length - 1] = Number(digits[digits.length - 1]) + 1
//     return digits
//   } else {
//     return String((BigInt(digits.join('')) + 1n)).split('')
//   }
// };