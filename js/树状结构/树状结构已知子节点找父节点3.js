const options = [
  {
    id: 'zhejiang',
    text: 'Zhejiang',
    children: [
      {
        id: 'hangzhou',
        text: 'Hangzhou',
        children: [
          {
            id: 'xihu',
            text: 'West Lake'
          }
        ]
      }
    ]
  },
  {
    id: 'jiangsu',
    text: 'Jiangsu',
    children: [
      {
        id: 'nanjing',
        text: 'Nanjing',
        children: [
          {
            id: 'zhonghuamen',
            text: 'Zhong Hua Men',
            children: [
              {
                id: 'tingtaige',
                text: 'tingtaige'
              },
              {
                id: 'yuhuatai',
                text: 'yuhuatai'
              }
            ]
          }
        ]
      }
    ]
  }
];


function recursion(primary, options) {

  var res = []
  const findPath = (primary, options) => {
    for (var i = 0; i < options.length; i++) {
      var item = options[i]
      if (item.id === primary) {
        res.unshift(item.id)
        return item.id
      }
      else {
        var children = item.children
        if (children && children.length > 0) {
          var id = findPath(primary, children)
          if (id) {
            res.unshift(item.id)
            return item.id
          }
        } else {
          return null
        }
      }
    }
  }

  findPath(primary, options)

  return res

}

var res = recursion('tingtaige', options)

console.log(res)


