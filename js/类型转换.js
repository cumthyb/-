console.log(1 + '2' + '2')
console.log(1 + +'2' + '2')
console.log(1 + -'1' + '2')
console.log(+'1' + '1' + '2')
console.log("a" - 'b' + '2')
console.log("a" - 'b' + 2)

function name(str) {
  return str.replace(/\-[a-zA-z]/g,m=>{
    return m.replace(/\-/,'').toUpperCase()
  })
}

function name2(str) {
  return str.replace(/(\-)([a-zA-z])/g,(m,p1,p2)=>{
    console.log(m,p1,p2)
    return p2.toUpperCase()
  })
}

var str='border-left-color'
console.log(name2(str))

