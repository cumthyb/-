/*
给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 
一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let len = l1.length > l2.length ? l1.length : l2.length
  let countGap = l1.length - l2.length
  if (countGap > 0) {
    while (countGap) {
      l2.push(0)
      countGap--
    }
  }
  if (countGap < 0) {
    countGap = -1 * countGap
    while (countGap) {
      l1.push(0)
      countGap--
    }
  }
  let tmp = 0
  let sum = 0
  let result = []
  for (let index = 0; index < len; index++) {
    sum = l1[index] + l2[index] + tmp
    if (sum > 9) {
      sum = sum % 10
      tmp = 1
    }
    else tmp = 0

    result.push(sum)
  }
  return result
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

let add = (l1, l2) => {
  let result = new ListNode()
  let head = result
  let tmp = 0
  while (l1 || l2) {
    let v1 = l1 ? l1.val : 0
    let v2 = l2 ? l2.val : 0
    let sum = (v1 + v2 + tmp) % 10
    tmp = (v1 + v2 + tmp) > 9 ? 1 : 0
      
    head.next = new ListNode(sum)   
    head = head.next
      
    l1 = l1 && l1.next ? l1.next : null
    l2 = l2 && l2.next ? l2.next : null

  }
  if (tmp) {
    head.next = new ListNode(tmp)
  }
  console.log(result)
  return result.next
}

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));

module.exports = addTwoNumbers