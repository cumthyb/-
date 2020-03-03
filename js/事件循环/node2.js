setInterval(() => {
  console.log('setInterval')
}, 100)

process.nextTick(function tick () {
  process.nextTick(tick)
})

setInterval(() => {
  console.log('setInterval')
}, 100)

setImmediate(function immediate () {
  setImmediate(immediate)
})


// 解释：process.nextTick 内执行 process.nextTick 仍然将 tick 函数注册到当前 microtask 的尾部，
// 所以导致 microtask 永远执行不完； 
// setImmediate 内执行 setImmediate 会将 immediate 函数注册到下一次 event loop 的 check 阶段，
// 而不是当前正在执行的 check 阶段，所以给了 event loop 上其他 macrotask 执行的机会。