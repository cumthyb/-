/*
题目：
从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。
例如：
8
6 10
5 7 9 11
*/
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

/*
和上一题差不多，使用队列。
但是这里需要一个变量表示当前层中还没有打印的节点数；
另一个变量表示下一层节点的数目
*/

function printTree(root) {
  if (!root) return

  let list = [root]
  let unPrint = 1
  let countInNextLevel = 0
  let str = ''

  while (list.length) {
    var current = list.shift()
    str += ` ${current.val} `
    unPrint--

    var left = current.left
    var right = current.right
    if (left) {
      list.push(left)
      countInNextLevel++
    }
    if (right) {
      list.push(right)
      countInNextLevel++
    }

    if (unPrint === 0) {
      console.log(`${str}`)
      unPrint = countInNextLevel
      countInNextLevel = 0
      str = ''
    }

  }
}


/**
 * 辅助栈记录下一层次的节点
 */
function printTree2(root) {
  if (!root) return

  let currentStack = [root]
  let nextStack = []
  let str = ''

  while (currentStack.length) {
    var current = currentStack.shift();
    str+=` ${current.val}`

    var left = current.left
    var right = current.right

    left&&nextStack.push(left)
    right&&nextStack.push(right)

    if(!currentStack.length){
      console.log(str)
      str=''
      currentStack=nextStack
      nextStack=[]
    }
  }

}

function printTree3(root) {
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

printTree(node8)
printTree2(node8)