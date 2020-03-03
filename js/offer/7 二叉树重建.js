/*
题目：
输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。
要求：
假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
例如，输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建这个二叉树，并输出它的头节点
*/


/**
 *
 *
 * @param {*} val
 */
function Node(val) {
  this.val = val
  this.left = null
  this.right = null
}

/**
 *
 *
 * @param {*} preOrder
 * @param {*} inOrder
 */

// 例如，输入前序遍历序列{1, 2,4,7, 3,5,6,8}和中序遍历序列{4,7,2, 1, 5,3,8,6}，则重建这个二叉树，并输出它的头节点
function rebuildTree(preOrder, inOrder) {
  if (inOrder.length === 0) {
    return null;
  }

  let root = preOrder[0]
  let head = new Node(root)

  let index = inOrder.indexOf(root)
  head.left = rebuildTree(preOrder.slice(1, index + 1), inOrder.slice(0, index));
  head.right = rebuildTree(preOrder.slice(index + 1), inOrder.slice(index + 1));

  return head
}

var preOrder = [1, 2, 4, 7, 3, 5, 6, 8]
var inOrder = [4, 7, 2, 1, 5, 3, 8, 6]

var tree = rebuildTree(preOrder, inOrder)
console.log(tree)