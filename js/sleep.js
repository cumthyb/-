
// sleep(secondNums),
// asyncSleep(secondNums)

function asyncSleep(waittime) {
  return new Promise((resolve, reject) => setTimeout(() => {
    resolve()
  }, waittime))
}

async function sleep(waittime, fn) {
  await asyncSleep(waittime)
  fn()
}
