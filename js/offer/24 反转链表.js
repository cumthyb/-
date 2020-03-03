/**
 * 链表长度边界
 * 只有一个节点？
 * 有多个节点？
 */


function ListNode(val) {
  this.val = val;
  this.next = null;
}


function reverseList(head) {
  let newHead = null
  let next = null

  while (head) {
    next = head.next
    head.next=newHead
    newHead=head

    head=next
  }
  return newHead
}

/**
 * a=>b=>c=>d=>e=>null
 * head=>a
 * next=b
 * 
 * newHead=head
 */


var obj3 = {
  val: 'obj3',
  next: null
}
var obj2 = {
  val: 'obj2',
  next: obj3
}
var obj1 = {
  val: 'obj1',
  next: obj2
}

// let res=reverseList(obj1)

// console.log(res)


function reverse(node) {
  var next=null
  var newHead=null
  while (node) {
    next=node.next;

    node.next=newHead
    newHead=node

    node=next;
  }
  return newHead
}

console.log(reverse(obj1))