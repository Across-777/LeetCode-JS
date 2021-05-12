/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const sum = String(BigInt(a) + BigInt(b))
  if (sum.indexOf(2) === -1) {
    return sum
  }
  const arr = sum.split('')
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == 2) {
      arr[i] = 0
      if (i == 0) {
        arr.unshift(1)
        break
      }
      arr[i - 1] = Number(arr[i - 1]) + 1
    }
    else if (arr[i] == 3) {
      arr[i] = 1
      if (i == 0) {
        arr.unshift(1)
        break
      }
      arr[i - 1] = Number(arr[i - 1]) + 1
    }
  }
  return arr.join('')
};
// @lc code=end

// 294/294 cases passed (80 ms)
// Your runtime beats 95.6 % of javascript submissions
// Your memory usage beats 89.52 % of javascript submissions (39.2 MB)
