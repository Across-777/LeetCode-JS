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
  let next = deleteDuplicates(head.next)
  if (head.val === next.val) {
    return next
  } else {
    return {
      val: head.val,
      next
    }
  }
};
// @lc code=end

/**
 * 思路：递归
 * 递归三部曲
 * 整个递归的终止条件。
 * 一级递归需要做什么？
 * 应该返回给上一级的返回值是什么？
 * 1.listNode next为空是结束
 * 2.判断 目前节点的值是否等于下一个节点的值
 *   等于   则直接返回 下一个节点的值
 *   不等于 将本值加入 构造成一个新链表返回
 * 3.本题 应返回不重复的链表
 */

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


