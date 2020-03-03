/**
题目描述：
给定一个排序的链接列表，删除所有具有重复数字的节点，从原始列表中只留下不同的数字。
例如， 给定1-> 2-> 3-> 3-> 4->4-> 5，返回1-> 2-> 5。
给定1-> 1-> 1-> 2-> 3，返回2-> 3。
*/


function Node(val) {
  this.val = val;
  this.next = null;
}

let node7 = new Node(5)
let node6 = new Node(4)
let node5 = new Node(4)
let node4_2 = new Node(3)
let node4 = new Node(3)
let node3 = new Node(3)
let node2 = new Node(2)
let node1 = new Node(1)


node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node4_2
node4_2.next = node5
node5.next = node6
node6.next = node7

// 1-2-3-3-3-4-4-5
function deleteDuplicates(head) {
  let current = head
  while (current) {
    let next1 = current.next
    if (next1) {
      let next2 = next1.next
      if ((next2 && next1.val === next2.val) || current.val === next1.val) {
        let tmp = next1
        while (tmp.val === next1.val) {
          tmp = tmp.next
        }
        current.next = tmp;
      }
      else {
        current = current.next
      }
    } else {
      current = current.next
    }
  }
}

deleteDuplicates(node1)
console.log(node1)