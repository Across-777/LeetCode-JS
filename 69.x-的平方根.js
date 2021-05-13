/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let low = 0
  let high = x
  let mid
  while (low <= high) {
    mid=Math.floor((low + high) / 2)
    if (mid ** 2===x){
      return mid
    }
    else if (mid ** 2<x){
      low=mid+1
    }else{
      high=mid-1
    }
  }
  return high
};
// @lc code=end

// console.log(mySqrt(4));

// 优化 - 二分法 
// var mySqrt = function (x) {
//   let low = 0
//   let high = x
//   let mid
//   while (low <= high) {
//     mid=Math.floor((low + high) / 2)
//     if (mid ** 2>x){
//       high=mid-1
//     }else{
//       low=mid+1
//     }
//   }
//   return high
// };


// 暴力破解
// var mySqrt = function(x) {
//   if(x===0||x===1) return x
//   for(let i=1;i<x;i++){
//     if(i*i<=x &&(i+1)*(i+1)>x ){
//       return i
//     }
//   }
// };


// 还可以使用牛顿迭代解法
// 公式：x(i+1) = 0.5 * (xi + C/xi)