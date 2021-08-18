/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
//  进阶解法：空间复杂度 O(1)
// 快慢指针: 快每次走两步,慢指针能追上快指针则代表有环
var hasCycle = function (head) {
  if (head === null || head.next === null) return false
  let slow = head
  let fast = head.next
  while (slow && fast) {
    if (slow === fast) return true
    slow=slow.next
    fast=fast.next
    // 这句加不加都可以
    // if (slow === fast) return true
    if(fast) fast=fast.next
  }
  return false
};
// @lc code=end


// 将所有节点的 next 的地址位置存放到 set 中
// 在循环过程中如果发现一样的地址，代表这个链表中存在环
/*
var hasCycle = function (head) {
  if (head === null || head.next === null) return false
  const arr = new Set([head.next])
  let index = head.next
  while (index) {
    if (arr.has(index.next)) {
      return true
    }
    arr.add(index.next)
    index=index.next
  }
  return false
};
*/

// 进阶解法：空间复杂度 O(1)
// 将循环过的节点的 val 赋值为不会重复的值(Symbol)
// 如果此节点存在next 并且此节点的next节点为(Symbol),则代表存在环
/*
var hasCycle = function (head) {
  if (head === null || head.next === null) return false
  const p = Symbol('value')
  head.val = p
  let index = head.next
  while (index) {
    if (index.next && index.next.val === p) {
      return true
    }
    index.val = p
    index = index.next
  }
  return false
};
*/
