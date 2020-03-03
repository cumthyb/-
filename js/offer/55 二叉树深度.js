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


function deepth(root) {
  if (!root) {
    return 0
  }

  var left = deepth(root.left) 
  var right = deepth(root.right)

  return Math.max(left, right)+1
}

var res = deepth(node1)
console.log(res)