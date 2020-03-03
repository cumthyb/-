/*
题目：
实现一个函数按照之字形顺序打印一个二叉树，即第一行按照从左到右的顺序打印，第二行按照从右到左的顺序打印
第三行在按照从左到右的顺序打印，其他行以此类推
*/

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var node1 = new TreeNode(1)
var node2 = new TreeNode(2)
var node3 = new TreeNode(3)
var node4 = new TreeNode(4)
var node5 = new TreeNode(5)
var node6 = new TreeNode(6)
var node7 = new TreeNode(7)
var node8 = new TreeNode(8)
var node9 = new TreeNode(9)
var node10 = new TreeNode(10)
var node11 = new TreeNode(11)
var node12 = new TreeNode(12)
var node13 = new TreeNode(13)
var node14 = new TreeNode(14)
var node15 = new TreeNode(15)

node1.left = node2
node1.right = node3

node2.left = node4
node2.right = node5

node3.left = node6
node3.right = node7

node4.left = node8
node4.right = node9

node5.left = node10
node5.right = node11

node6.left = node12
node6.right = node13

node7.left = node14
node7.right = node15


function printTree(root) {
  if (!root) return
  let level = 1
  let currentStack = [root]
  let nextStack = []
  let str = ''
  while (currentStack.length) {
    var current = currentStack.pop();
    str += ` ${current.val} `

    var left = current.left
    var right = current.right

    if (level % 2 === 1) {
      left&&nextStack.push(left)
      right&&nextStack.push(right)
    } else {
      right&&nextStack.push(right)
      left&&nextStack.push(left)
    }

    if (currentStack.length === 0) {
      currentStack = nextStack
      nextStack = []
      console.log(str)
      str = ''
      level++
    }

  }
}

printTree(node1)