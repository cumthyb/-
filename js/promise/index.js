const Promise = require('./myPromise2')

let p = new Promise((reslove, reject) => {
  // throw new Error('失败')

  // setTimeout(() => {
    reslove('成功')
    reject('失败')
  // }, 0);

})

var res=p.then(data => {
  console.log('success1', data)
  // return 1
  throw new Error('失败')
}, error => {
  console.log('error1', error)
}).then(data => {
  console.log('success1.2', data)
}, error => {
  console.log('error1.2', error)
})


// p.then(data => {
//   console.log('success2', data)
// }, error => {
//   console.log('error', error)
// })


// p.then(data => {
//   console.log('success', data)
// }, error => {
//   console.log('error', error)
// }) 

async function a1 () {
  console.log('a1 start')
  await a2()
  console.log('a1 end')
}
async function a2 () {
  console.log('a2')
}

console.log('script start')

setTimeout(() => {
  console.log('setTimeout')
}, 0)

Promise.resolve().then(() => {
  console.log('promise1')
})

a1()

let promise2 = new Promise((resolve) => {
  resolve('promise2.then')
  console.log('promise2')
})

promise2.then((res) => {
  console.log(res)
  Promise.resolve().then(() => {
      console.log('promise3')
  })
})
console.log('script end')


/**
 * script start
 * a1 start
 * a2
 * promose2
 * script end
 * promise1
 * a1 end
 * promise2.then
 * promise3
 * settimeout
 */