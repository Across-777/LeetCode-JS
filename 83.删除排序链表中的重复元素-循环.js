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
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if ((!head) || head.next === null) return head
  // 保存上次 val 值
  let temp = head.val
  // 链表指针
  let pre = head
  let obj = head.next
  do {
    if (obj.val > temp) {
      temp = obj.val
      pre = pre.next
    } else {
      pre.next = obj.next
    }
    obj = obj.next
  }
  while (obj !== null)
  return head
};
// @lc code=end

// 测试用例
// console.log(deleteDuplicates({val:1,next:{val:1,next:{val:2,next:null}}}));
// console.log(deleteDuplicates({val:1,next:{val:2,next:null}}));
// console.log(deleteDuplicates({val:1,next:{val:1,next:null}}));
// console.log(deleteDuplicates(
//   {
//     val: 1, next:
//     {
//       val: 1, next:
//       {
//         val: 2, next:
//         {
//           val: 3, next:
//           {
//             val: 3, next: null
//           }
//         }
//       }
//     }
//   }
// ));


