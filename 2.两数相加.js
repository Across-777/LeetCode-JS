/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
var addTwoNumbers = function (l1, l2) {
  if (l1 === null) return l2
  if (l2 === null) return l1
  let t1 = l1
  let t2 = l2
  let sum = { val: 0, next: null }
  let index = sum
  while (t1 != null || t2 != null) {
    console.log('flag',t1 != null || t2 != null);
    console.log('xxx',t1,t2);
    if (t1 && t2) {
      index.val = index.val + t1.val + t2.val
      index.next = {
        val: 0,
        next: null
      }
      if (index.val >= 10) {
        index.val = index.val - 10
        index.next.val = 1
      }
      t1 = t1.next
      t2 = t2.next
      if (t1 === null && t2 === null) {
        index.next = null
        break
      }
      index = index.next
    } else {
      console.log('xh');
      if (t1 === null) {
        console.log('t1');
        if (index.val === 0) {
          index.val = t2.val
          index.next = t2.next
          break
        }
        index.val = index.val + t2.val
        if (index.val === 10) {
          index.val = 0
          index.next = {
            val: 1,
            next: null
          }
        }
        index = index.next
        t2 = t2.next
        continue
      }
      console.log('1111',t1,t2);
      if (t2 === null) {
        if (index.val === 0) {
          index.val = t1.val
          index.next = t1.next
          break
        }
        // index ===10 未考虑，
        index.val = index.val + t1.val
        if (index.val === 10) {
          index.val = 0
          index.next = {
            val: 1,
            next: null
          }
        }
        index = index.next
        t1 = t1.next
      }
    }
  }
  return sum
};
// @lc code=end

// console.log(addTwoNumbers(
//   {
//     val: 9,
//     next: {
//       val: 9,
//       next: {
//         val: 9,
//         next: null
//       }
//     }
//   },
//   {
//     val: 9,
//     next: null
//   }
// ));
console.log(addTwoNumbers(
  {
    val: 2,
    next: {
      val: 4,
      next: {
        val: 9,
        next: null
      }
    }
  },
  {
    val: 5,
    next: {
      val: 6,
      next: {
        val: 4,
        next: {
          val: 9,
          next: null
        }
      }
    }
  }
));
