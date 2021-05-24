/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if(p===null&&q===null) return true
  if(p===null||q===null) return false
  if(p.val===q.val){
    return isSameTree(p.left,q.left) && isSameTree(p.right,q.right)
  }else{
    return false
  }
};
// @lc code=end

// 1.终止条件 2.返回数据 3.本次操作
// 1.left right 是否 不相等 或者 相等
// 2.返回此节点是否相等
// 3.val 相等 则往前递归
//   val 不相等 则返回 false 

