let source = {
  a: 1,
  b: {
    name: 'tom',
    course: {
      id: 1,
      grade: 100
    },
    c: {
      kkk: 121
    }
  }
}

// set source.b.c.d.e 10000

const paths = 'b.c.d.e.f'
const value = 10000

function setValue(obj, paths, value) {
  let _paths = paths.split('.')
  let tmp = obj
  for (let i = 0; i < _paths.length-1; i++) {
    let proName = _paths[i]
    tmp[proName] = tmp[proName] || {}
    tmp = tmp[proName]
  }
  tmp[_paths[_paths.length-1]]=value
}

setValue(source, paths, value)

console.log(source);