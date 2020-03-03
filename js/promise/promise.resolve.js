Promise.resolve(1).then(data => {
  console.log(data) // 1
})


Promise.resolve(() => 2).then(data => {
  console.log(data) // Function
})


Promise.resolve({ a: 3 }).then(data => {
  console.log(data) // {a:3}
})

Promise.resolve({ then: () => 4 }).then(data => {
  console.log(data) // 不输出
})

Promise.resolve({ then: (res,rej) => res(5) }).then(data => {
  console.log(data)
})

const p1=new Promise((resolve,reject)=>{
  resolve(6)
})
Promise.resolve(p1).then(data => {
  console.log(data)
})
