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
function isSymmetryTree(a,b){
  if(a===null&&b===null) return true
  if(a===null||b===null) return false
  if(a.val===b.val){
    return isSymmetryTree(a.left,b.right) && isSymmetryTree(a.right,b.left) 
  }else{
    return false
  }
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  return isSymmetryTree(root.left,root.right)
};
// @lc code=end

// 本题是100题的变体，将树拆成两个树后和100题一样处理即可

