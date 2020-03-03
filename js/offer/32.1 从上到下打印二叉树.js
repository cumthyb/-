/*
题目一：不分行从上到下打印二叉树（层序遍历）
从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。
*/
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}


/**
举一反三：
不管是广度优先遍历一幅有向图还是一棵树，都要用到队列。首先把起始节点（对树而言是根节点）放入队列。
接下来每次从队列的头部取出(shift()，先入先出FIFO)一个节点，遍历这个节点之后，
把能够达到的节点（对树而言是子节点）都依次放入队列。
重复这个遍历过程，直到队列中的节点全部被遍历为止。
*/


function printTree(root){
  let list=[root]

  while(list.length){
    var current=list.shift()
    var left=current.left
    var right=current.right

    left&&list.push(left)
    right&&list.push(right)

    console.log(current.val)
  }

}

var node8=new TreeNode(8)
var node6=new TreeNode(6)
var node10=new TreeNode(10)
var node5=new TreeNode(5)
var node7=new TreeNode(7)
var node9=new TreeNode(9)
var node11=new TreeNode(11)

node8.left=node6
node8.right=node10

node6.left=node5
node6.right=node7

node10.left=node9
node10.right=node11

printTree(node8)

