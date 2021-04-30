/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const arr = Array.from(s.replace(/()/g, '').replace(/[]/g, '').replace(/{}/g, ''));
  if (arr.length === 0) {
    return true
  } else {
    const stack = []
    let flag = true
    for (let i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === '(') {
        stack.push(')')
      }
      else if (arr[i] === ')') {
        if (stack.pop() !== ')') {
          flag = false
          break
        }
      }
      else if (arr[i] === '[') {
        stack.push(']')
      }
      else if (arr[i] === ']') {
        if (stack.pop() !== ']') {
          flag = false
          break
        }
      }
      else if (arr[i] === '{') {
        stack.push('}')
      }
      else if (arr[i] === '}') {
        if (stack.pop() !== '}') {
          flag = false
          break
        }
      }
    }
    return flag && stack.length === 0
  }

};

// @lc code=end

