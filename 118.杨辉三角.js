/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 0) return []
  if (numRows === 1) return [[1]]
  const arr=[[1]]
  for (let i = 1; i < numRows; i++) {
    const temp=[1]
    for (let j = 1; j < arr[i-1].length; j++) {
      temp.push(arr[i-1][j-1]+arr[i-1][j])
    }
    temp.push(1)
    arr.push(temp)
  }
  return arr
};
// @lc code=end

