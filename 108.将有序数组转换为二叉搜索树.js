/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if(nums.length===0) return null
  const index=Math.ceil(nums.length/2)
  const TreeNode={val:nums[index-1],left:null,right:null}
  // console.log(nums.slice(0,index-1),nums.slice(index,nums.length));
  TreeNode.left=sortedArrayToBST(nums.slice(0,index-1))
  TreeNode.right=sortedArrayToBST(nums.slice(index,nums.length))
  // console.log(TreeNode);
  return TreeNode
};
// @lc code=end

// 树的高度要理解到位
// 就是要整一个搜索二叉树
