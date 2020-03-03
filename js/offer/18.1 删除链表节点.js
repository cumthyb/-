/**
题目：
在O(1)时间内删除链表的节点
*/


/**
 * 要删除的节点是否是最后一个节点？？？
 * 要删除的节点是否是第一个节点？？？
 * 链表只有一个节点？？？
 */

function Node(val) {
  this.val = val;
  this.next = null;
}


let node4=new Node(4)
let node3=new Node(3)
let node2=new Node(2)
let node1=new Node(1)
let node0=new Node(0)
node0.next=node1
node1.next=node2
node2.next=node3
node3.next=node4

/*顺序查找，复杂度O(n)*/
function deleteNode1(head, node) {
  let next = null,
    pre = null;
  while (head !== node) {
    pre = head;
    head = head.next;
  }


  next = head.next;

  if (pre === null) {
    head.next = null;
  } else {
    pre.next = next;
  }
}


/**
 * 直接把下一个节点的内容和next指针替换给要删除的节点
 */
function deleteNode2(head, node) {
 let next=node.next
 node.val=next.val
 node.next=next.next
}

deleteNode2(node0,node2)
console.log(node0)