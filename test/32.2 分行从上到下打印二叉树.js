// 8
// 6 10
// 5 7 9 11
// 12 13
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function printTree(root) {
  let currentLevel = [root]
  let nextLevel = []
  let res = []
  let tmp = []
  while (currentLevel.length > 0) {
    let node = currentLevel.shift()
    tmp.push(node.val)
    node.left && nextLevel.push(node.left)
    node.right && nextLevel.push(node.right)
    if (currentLevel.length === 0) {
      currentLevel = [].concat(nextLevel)
      nextLevel = []
      res.push(tmp)
      tmp = []
    }
  }
  return res
}

var node8 = new TreeNode(8)
var node6 = new TreeNode(6)
var node10 = new TreeNode(10)
var node5 = new TreeNode(5)
var node7 = new TreeNode(7)
var node9 = new TreeNode(9)
var node11 = new TreeNode(11)
var node12 = new TreeNode(12)
var node13 = new TreeNode(13)

node8.left = node6
node8.right = node10

node6.left = node5
node6.right = node7

node10.left = node9
node10.right = node11

node11.left = node12
node11.right = node13

var res = printTree(node8)
console.log(res)