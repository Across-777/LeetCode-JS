/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  nums2=[...nums];
  for(let i=0;i<=nums.length;i++){
    nums2.shift();
    let j=nums2.indexOf(target-nums[i])
    if(j>=0){
      return [i,j+1+i]
    }
  }
};
// @lc code=end

// var twoSum = function (nums, target) {
//   nums2 = [...nums];
//   let number = nums.flatMap(
//     (item1, index1) => {
//       nums2.shift()
//       let i2 = -1;
//       nums2.forEach(
//         (item2, index2) => {
//           if (item1 + item2 == target) { i2 = index2 }
//         })
//       if (i2 >= 0) {
//         return [index1, index1 + i2 + 1]
//       }
//     })
//   number = number.filter((item) => { return item != undefined })
//   return number
// };


// let twoSum = function (nums, target) {
//   nums2 = [...nums];
//   let number = nums.reduce(
//     (list, item1, index1) => {
//       nums2.shift()
//         nums2.forEach(
//           (item2, index2) => {
//             if (item1 + item2 == target) {
//               if (!list.includes(index1 + index2 + 1)) {
//                 list.push(index1, index1 + index2 + 1);
//               }
//             }
//           }
//         )
//       return list;
//     }, [])
//   return number
// };