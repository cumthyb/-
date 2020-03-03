/*
题目：
输入一颗二叉树和一个整数，打印出二叉树中节点值的和为输入整数的所有路径。
从树的根节点开始往下一直到叶节点所经过的节点形成一条路径。
*/

/*
从根节点到叶子才算一条路径，前序遍历，用一个栈保存路径节点值，如果当前累加值等于目标值，则加入result中
注意浅拷贝和深拷贝的问题
*/

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}


var node10 = new TreeNode(10)
var node5 = new TreeNode(5)
var node12 = new TreeNode(12)
var node4 = new TreeNode(4)
var node7 = new TreeNode(7)

node10.left = node5
node10.right = node12

node5.left = node4
node5.right = node7

const target = 22
const res = []
function searchPath(root, paths = []) {
  paths = paths.concat(root.val)
  if (root.left) {
    searchPath(root.left, paths)
  }
  if (root.right) {
    searchPath(root.right, paths)
  }

  if (!root.left && !root.right) {
    let sum = paths.reduce((acc, val) => acc += val, 0)
    if (sum === target) {
      res.push(paths)
    }
  }
}

searchPath(node10)
console.log(res)