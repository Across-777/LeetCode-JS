/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) return 0
  const arr = [[root]]
  let index = 0
  while (true) {
    let tempArr = []
    for (let i = 0; i < (arr[index]).length; i++) {
      if (arr[index][i].left !== null) {
        tempArr.push(arr[index][i].left)
      }
      if (arr[index][i].right !== null) {
        tempArr.push(arr[index][i].right)
      }
    }
    if(tempArr.length===0){
      break
    }else{
      arr.push(tempArr)
      index++
    }
  }
  return arr.length
};
// @lc code=end


// 笨法子：
// 将树的每一层都放在对应的数组坐标下用数组保存
// 例如 初始根节点在 arr[0]中
//      初始跟节点下的左右节点在 arr[1]下
// 下一层的数组由上一次循环得来

