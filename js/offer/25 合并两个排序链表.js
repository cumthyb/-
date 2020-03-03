/*
题目：
输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。
*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// var list1={1,3,5,7}
// var list2={2,4,6,8}

var node1 = new ListNode(1)
var node2 = new ListNode(2)
var node3 = new ListNode(3)
var node4 = new ListNode(4)
var node5 = new ListNode(5)
var node6 = new ListNode(6)
var node7 = new ListNode(7)
var node8 = new ListNode(8)

node1.next = node3
node3.next = node5
node5.next = node7

node2.next = node4
node4.next = node6
node6.next = node8

function mergeList(list1, list2) {
  if (list1 === null)
    return list2
  else if (list2 === null)
    return list1

  let res = new ListNode()

  if (list1.val < list2.val) {
    res.val = list1.val
    res.next = mergeList(list1.next, list2)
  } else {
    res.val = list2.val
    res.next = mergeList(list1, list2.next)
  }
  return res

}

let res = mergeList(node1, node2)
console.log(res)