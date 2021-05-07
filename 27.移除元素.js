/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
  if(nums.length===0) return 0
  let i=0,j=0
  while(i<nums.length){
    if(nums[i]===val){
      nums.splice(i,1)
      j++
    }else{
      i++
    }
  }
  return nums.length
};
// @lc code=end


//  双指针，不使用splice 函数  - runtime memory 都比较差
// var removeElement = function(nums, val) {
//   if(nums.length===0) return 0
//   let i=0,j=0
//   while(i<nums.length){
//     if(nums[i]!==val){
//       nums[j]=nums[i]
//       j++
//     }
//     i++
//   }
//   nums.length=j
//   return nums.length
// };