/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if(root.left === null && root.right === null)  return true
  if (root.left === null || root.right === null) return false
  const arr1=[root.left]
  const arr2=[root.right]
  let temp=true
  let i = 0
  while (arr1.length!==0 && arr2.length!==0) {
    if (arr1[i].val === arr2[i].val) {
      if (arr1[i].left && arr2[i].right) {
        arr1.push(arr1[i].left)
        arr1[i].left = null
        arr2.push(arr2[i].right)
        arr2[i].right = null
        i++
      } else {
        if (arr1[i].right && arr2[i].left) {
          arr1.push(arr1[i].right)
          arr1[i].right = null
          arr2.push(arr2[i].left)
          arr2[i].left = null
          i++
        } else {
          if (arr1[i].left !== arr2[i].right || arr1[i].right !== arr2[i].left) {
            temp = false
            break;
          }
          arr1.pop()
          arr2.pop()
          i--
        }
      }
    } else {
      temp = false
      break;
    }
  }
  return temp
};
// @lc code=end

// 迭代
// 还可以优化 

