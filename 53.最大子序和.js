/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if(nums.length===1) return nums[0]
  let sum=nums[0]
  let max=nums[0]
  for(let i=1;i<nums.length;i++){
    sum+=Number(nums[i])
    if(sum<=0){
      sum=0
    }else{
      if(sum>max){
        max=sum
      }
    }
    if(nums[i]>max){
      max=nums[i]
      sum=nums[i]
    }
  }
  return max
};
// @lc code=end
// 思路：
// 计算连续最大值(sum)，如果小于0 则将其归零
// 如果sum大于0 并且大于最大值(max) ，则将 max 设为 sum
// 如果当前数组元素大于max(此时的 max 是 Max(max,sum))，将 max 和 sum 分别设为当前数组元素
// 最后返回 max 即可

// 优化算法的测试用例
// console.log(maxSubArray([-1,1,2,1]));
// 4
// console.log(maxSubArray([-2,3,1,3]));
// 7

//  本题可以使用分治法 - 待学习