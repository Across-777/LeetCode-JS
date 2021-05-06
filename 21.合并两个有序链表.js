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
function ListNode(val, next) {
  const obj = {}
  obj.val = (val === undefined ? 0 : val)
  obj.next = (next === undefined ? null : next)
  return obj
}

function getArr(nodeList) {
  let temp = nodeList
  const arr = []
  if (temp) {
    while (temp.next !== null) {
      arr.push(temp.val)
      temp = temp.next
    }
    arr.push(temp.val)
  }
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  // 排序传入函数
  // 若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
  // 若 a 等于 b，则返回 0。
  // 若 a 大于 b，则返回一个大于 0 的值。
  const arr = (getArr(l1).concat(getArr(l2))).sort(
    (a, b) => {
      if (a < b) return -1
      else if (a === b) return 0
      else return 1
    })
  console.log(arr);
  return createListNode(arr)
};
// @lc code=end

