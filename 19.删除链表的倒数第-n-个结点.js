/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
// 双指针

// 先让fast走n+1步
// 然后slow和fast再一起走
// fast等于null时,slow的next节点就是要删除的节点

// 注意有可能删除的是头节点,需要另外处理
var removeNthFromEnd = function (head, n) {
  if (head.next === null) return null
  let count = n
  let slow = head
  let fast = head
  while (count >= 0 && fast) {
    fast = fast.next
    count--
  }
  while (fast && slow) {
    fast = fast.next
    slow = slow.next
  }
  if (count >= 0) {
    head = head.next
  } else {
    slow.next = slow.next.next
  }
  return head
};
// @lc code=end
