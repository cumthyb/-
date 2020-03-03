/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) {
    return 0;
  } else {
    var leftDepth = maxDepth(root.left),
      rightDepth = maxDepth(root.right);
    var childDepth = leftDepth > rightDepth ? leftDepth : rightDepth;
    return 1 + childDepth;
  }
};