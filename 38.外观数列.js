/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */

var countAndSay = function (n) {
  let i = 0
  let next = '1'
  while (i < n-1) {
    let arr = next.split('')
    let descArr = []
    let count = 1
    if (arr.length === 1) {
      descArr.push('11')
    } else {
      for (let j = 1; j < arr.length; j++) {
        if (arr[j - 1] === arr[j]) {
          count++
        } else {
          descArr.push(`${count}${arr[j - 1]}`)
          count = 1
        }
        if (j === arr.length - 1) {
          descArr.push(`${count}${arr[j]}`)
        }
      }
    }
    next = descArr.join('')
    descArr = []
    i++
  }
  return next
};
console.log(countAndSay(5));
// @lc code=end


// 可递归 - 感觉递归会更麻烦