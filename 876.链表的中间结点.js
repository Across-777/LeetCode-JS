/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
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
// 思路:快慢指针
// 快指针每次走两步,慢指针每次走一步
// 等快指针到到达尾部,慢指针则正好指向中间节点
var middleNode = function (head) {
  if (head.next === null) return head
  let slow=head
  let fast=head
  while(slow.next&&fast.next){
    slow=slow.next
    fast=fast.next
    if(fast.next) fast=fast.next
  }
  return slow
};
// @lc code=end

