/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  // 考虑边界
  if (!l1) return l2
  if (!l2) return l1
  // 以 l1 为主链表，将 l2 的节点往 l1 中合并
  // 如果 l2 头节点 小于 l1 头节点，则操作不统一
  // 需给 l1 新增一个头节点 ,方便 l2 小于 l1 头节点的节点插入到 l1 头节点之前的位置
  const obj = { val: null, next: l1 }
  // 暂存当前节点之前的节点，方便插入
  let pre = obj
  let index = l1
  let index2 = l2
  while (index && index2) {
    if (index.val <= index2.val) {
      pre = index
      index = index.next
    } else if (index.val > index2.val) {
      const tempIndex = pre.next
      const nextIndex = index2.next
      pre.next = index2
      pre.next.next = tempIndex

      pre = pre.next
      index2 = nextIndex
    }
  }
  // 如果index2 还存在代表 index2的剩余部分都比 l1 的尾部节点数字更大
  if (index2) {
    pre.next = index2
  }
  return obj.next
};
// @lc code=end