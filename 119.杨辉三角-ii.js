/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if (rowIndex === 0) return [1]
  if (rowIndex === 1) return [1,1]
  let arr=[1]
  for (let i = 0; i < rowIndex; i++) {
    const temp=[1]
    for (let j = 1; j < arr.length; j++) {
      console.log(i,j);
      console.log(arr[j-1]+arr[j]);
      temp.push(arr[j-1]+arr[j])
    }
    temp.push(1)
    arr=temp
  }
  return arr
};
// @lc code=end







/**
 * 获取杨辉三角的指定行
 * 直接使用组合公式C(n,i) = n!/(i!*(n-i)!)
 * 则第(i+1)项是第i项的倍数=(n-i)/(i+1);
 */