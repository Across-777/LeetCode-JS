/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  // 节点
  let index = root
  // 数值栈
  const arr = []
  // 节点栈
  const rootNode = []
  while (index) {
    if (index.left === null && index.right === null) {
      arr.push(index.val)
      index = rootNode.pop()
    } else {
      if (index.left !== null) {
        temp = index.left
        index.left=null
        rootNode.push(index)
        index = temp
      } else {
        arr.push(index.val)
        index = index.right
      }
    }
  }
  return arr
};
// @lc code=end
/**
 * 迭代思路：
 * 如果左右节点都为null，则将本节点的值压入数值栈，从节点栈中pop出新节点
 * 如果 左节点不为空，则将本节点的左节点设为null,将本节点压入节点栈，将本节点的左节点设为新节点
 * 如果 右节点不为空，则将本节点的值压入数值栈，将本节点的右节点设为新节点
 */

// 递归
// var inorderTraversal = function(root) {
//   return root===null?[]:[...inorderTraversal(root.left),root.val,...inorderTraversal(root.right)]
// };

// 测试用例
// [1,null,2,3]
// console.log(inorderTraversal(
//   {
//     val: 1,
//     left: null,
//     right: {
//       val: 2,
//       left: {
//         val: 3,
//         left: null,
//         right: null
//       },
//       right: null
//     }
//   }
// ));

