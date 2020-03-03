var tree = [
  {
    id: '01000000',
    text: '北京',
    children: [{
      id: '01001000',
      text: '北京市',
      children: [
        {
          id: '01001001',
          text: '西城区',
          children: null
        }, {
          id: 12,
          text: '东城区',
          children: null
        }
      ]
    }]
  },
  {
    id: '02000000',
    text: '上海',
    children: [{
      id: '02001000',
      text: '上海市',
      children: [
        {
          id: '02001001',
          text: '黄浦区',
          children: [
            {
              id: '02001000',
              text: '上海市',
              children: null
            }
          ]
        }
      ]
    }]
  }];



// 深度递归查找
function searchNode(data, id) {
  let res = []
  const findId = (arr, id) => {
    arr.forEach(item => {
      if (item.id === id) {
        res.push(item.text)
      }
      if (item.children) {
        findId(item.children, id)
      }
    })
  }
  findId(data, id)
  return res
}

// let res = searchNode(tree, '02001000')
// console.log(res);


// 深度非递归查找
function searchNode2(data, id) {
  let res = []

  while (data.length) {
    let head = data.shift()
    if (head.id === id) {
      res.push(head.text)
    }
    if (head.children) {
      data = [...head.children, ...data]
    }
  }

  return res
}

// let res = searchNode2(tree, '02001000')
// console.log(res);




function searchNode3(data, id) {
  let res = []

  while (data.length) {
    let head = data.shift()
    if (head.id === id) {
      res.push(head.text)
    }
    if (head.children) {
      data.push(head.children)
    }
  }

  return res
}