var data = [
  { id: 1, parent_id: 0, name: "A" },
  { id: 2, parent_id: 1, name: "AA" },
  { id: 3, parent_id: 1, name: "AB" },
  { id: 4, parent_id: 3, name: "ABA" },
  { id: 5, parent_id: 3, name: "ABB" },
  { id: 6, parent_id: 3, name: "ABC" },
  { id: 7, parent_id: 1, name: "AC" },
  { id: 8, parent_id: 7, name: "ACA" },
  { id: 9, parent_id: 8, name: "ACAA" },
  { id: 10, parent_id: 8, name: "ACAB" },
]

function getTree(dataArr) {
  let root = dataArr.filter(item => item.parent_id === 0)[0]
  let map = {}
  let sub = []
  data.forEach(item => {
    map[item.id] = item
    if (item.parent_id !== 0) {
      sub.push(item)
    }
  })

  sub.forEach(item => {
    let _parent = map[item.parent_id]
    _parent.children || (_parent.children  = [])
    _parent.children.push(item)
  })

  return root
}

console.log(getTree(data))