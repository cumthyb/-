
const utils=require('util')

function array2tree(arr) {
  var top = [], sub = [], tempObj = {};

  arr.forEach(function (item) {
    if (item.parentId === 0) { // 顶级分类
      top.push(item)
    } else {
      sub.push(item) // 其他分类
    }
    item.children = []; // 默然添加children属性
    tempObj[item.id] = item // 用当前分类的id做key，存储在tempObj中
  })

  sub.forEach(function (item) {
    // 取父级
    var parent = tempObj[item.parentId] 
    // 把当前分类加入到父级的children中
    parent.children.push(item)
  })

  return top
}

var data = [
  { id: 1, parentId: 0, name: '第一级菜单A' },
  { id: 2, parentId: 0, name: '第一级菜单B' },
  { id: 3, parentId: 1, name: '第二级菜单A' },
  { id: 4, parentId: 1, name: '第二级菜单B' },
  { id: 5, parentId: 3, name: '第三级菜单A' },
  { id: 6, parentId: 3, name: '第三级菜单B' },
  { id: 7, parentId: 4, name: '第三级菜单C' },
  { id: 8, parentId: 4, name: '第三级菜单D' },
  { id: 9, parentId: 2, name: '第二级菜单C' },
  { id: 10, parentId: 2, name: '第二级菜单D' },
  { id: 11, parentId: 2, name: '第二级菜单E' },
  { id: 12, parentId: 8, name: '第四级菜单A' }
]

let str= utils.inspect(array2tree(data),false,8) ; 

console.log(str);