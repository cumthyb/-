/*
题目：
输入一个链表的头节点，从尾到头反过来打印出每个节点的值
*/

//List节点定义
function Node(val) {
  this.val = val;
  this.next = null;
}

function printList(head) {
  let arr = []
  while (head) {
    arr.unshift(head.val)
    head = head.next
  }
  return arr
}