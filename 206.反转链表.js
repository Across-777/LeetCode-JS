/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @param {ListNode} head
 * @return {ListNode}
 */
// 迭代
var reverseList = function (head) {
  // 考虑边界
  if (head === null || head.next === null) return head
  // 循环index
  let index = head
  // 存放临时节点
  let node = { val: head.val, next: null }  // 1
  do {
    index = index.next
    let t = { val: index.val, next: node } // 2
    node = t
  } while (index.next !== null)
  return node
};
// @lc code=end


// 递归
/* 
var reverseList = function (head) {
  if (head == null || head.next == null) { return head; }
  // 先保存当前节点的下一个节点的内存地址
  let next = head.next;
  // 获取下一个节点的反转列表表
  let newHead = reverseList(next);
  // 将下一个节点的 next 设为当前节点
  next.next = head;
  // 将当前节点的 next 设为 null
  head.next = null;
  // 返回反转列表
  return newHead;
};
*/