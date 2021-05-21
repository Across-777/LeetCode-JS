/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  const obj = {}
  obj.val = (val === undefined ? 0 : val)
  obj.next = (next === undefined ? null : next)
  return obj
}
function covertList(ListNode) {
  let temp = ListNode
  let arr = [temp.val]
  do {
    temp = temp.next
    arr.push(temp.val)
  } while (temp.next !== null)
  return arr
}

function createListNode(arr) {
  let temp = null
  for (let i = arr.length; i > 0; i--) {
    temp = ListNode(arr[i - 1], temp)
  }
  return temp
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if ((!head) || head.next === null) return head
  let arr = covertList(head)
  arr = [...new Set(arr)]
  return createListNode(arr)
};
// @lc code=end

