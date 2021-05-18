/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const h = grid.length
  const l = typeof (grid[0]) === 'number' ? 1 : grid[0].length
  if (l === 1 && h === 1) return grid[0]
  if (l === 1 || h === 1) return grid.flat().reduce((sum = 0, item) => sum += Number(item))
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < l; j++) {
      if(i === 0&&j===0){}
      else if (i === 0) {
        grid[i][j] = grid[i ][j- 1] + grid[i][j]
      }
      else if (j === 0) {
        grid[i][j] = grid[i- 1][j] + grid[i][j]
      } else {
        grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1])
      }
    }
  }
  return  grid[h-1][l-1]
};
// @lc code=end

// 先找特殊情况 1. l === 1 && h === 1   2. l === 1 || h === 1
// 找规律
// 第一行 最短路径为 从第一格到此格数字累计之和，第一列也是同理
// 不是第一行第一列的都符合此规律
// grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j]
