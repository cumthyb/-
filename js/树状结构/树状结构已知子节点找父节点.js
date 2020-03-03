const data = [
  {
    id: 1,
    label: '一级 2',
    children: [{
      id: 3,
      label: '二级 2-1',
      children: [{
        id: 4,
        label: '三级 3-1-1'
      }, {
        id: 5,
        label: '三级 3-1-2',
        disabled: true
      }]
    },
    {
      id: 2,
      label: '二级 2-2',
      disabled: true,
      children: [{
        id: 6,
        label: '三级 3-2-1'
      }, {
        id: 7,
        label: '三级 3-2-2',
        disabled: true
      }]
    }]
  }];


  /**
   * 递归
   * 若找到，则在递归栈中可以找到上级的id
   */
function getPath(data, id) {
  let res = []

  const findPath = (data) => {
    for (let i = 0; i < data.length; i++) {
      let item = data[i]
      if (item.id === id) {
        res.push(item.label)
        return 1
      }
      if (item.children && item.children.length) {
        let find = findPath(item.children)
        if (find === 1) {
          res.push(item.label)
          return 1
        }
      }
    }
  }
  findPath(data)
  return res
}

// let paths = getPath(data, 5)
// console.log(paths);



function findPaths(root, target) {
  let res = []
  function find(root, target, paths = []) {
    paths = paths.concat(root.label)
    if (root.id === target) {
      res.push(paths)
    } else if (root.children) {
      root.children.forEach(item => {
        find(item, target, paths)
      })
    }
  }
  find(root, target, [])
  return res
}

var paths2 = findPaths(data[0], 5)
console.log(paths2);