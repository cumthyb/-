
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

node1.left=node2
node1.right=node3
node2.left=node4
node3.left=node5
node3.right=node6


function serialize(root) {

  function beforeOrder(root,arr){
    if (root) {
      arr.push(root.val)
      beforeOrder(root.left,arr)
      beforeOrder(root.right,arr)
    }else{
      arr.push('$')
    }
  }

  var res=[]
  beforeOrder(root,res)
  return res.join(',');
}


let str=serialize(node1)
console.log(str)


function deserialize(str){
  let arr=str.split(',')
  if (arr.length<1) {
    return null
  }

  function recursiveBuildTree(arr){
    let val=arr.shift()
    if(val!=='$'){
      var node=new TreeNode(val)
      node.left=recursiveBuildTree(arr)
      node.right=recursiveBuildTree(arr)
      return node
    }
  }

  return recursiveBuildTree(arr)

}

let beforeOrderStr='1,2,4,$,$,$,3,5,$,$,6,$,$'

var node=deserialize(beforeOrderStr)
console.log(node)