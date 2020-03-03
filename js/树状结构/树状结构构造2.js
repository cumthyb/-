const data = [
  { id: 6, name: '6', pid: 8 },
  { id: 1, name: '1', pid: 5 },
  { id: 8, name: '8', pid: 0 },
  { id: 2, name: '2', pid: 5 },
  { id: 5, name: '5', pid: 8 },
  { id: 3, name: '3', pid: 6 },
  { id: 7, name: '7', pid: 3 },
  { id: 4, name: '4', pid: 1 },
]

function structTree(data) {
  let root = []
  let sub = []
  let tmpObjId = {}

  data.forEach(item => {
    tmpObjId[item.id] = item
    if (item.pid === 0)
      root.push(item)
    else sub.push(item)
  })

  sub.forEach(item => {
    let parent = tmpObjId[item.pid]
    if (!parent.children) {
      parent.children = []
    }
    parent.children.push(item)
  })

  return root
}


const utils = require('util')
let tree = structTree(data)

console.log(utils.inspect(tree, false, 8));