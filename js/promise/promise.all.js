Promise.all2 = function name(values) {
  if (!values) {
    throw Error('error')
  }

  if (values.length === 0) {
    return Promise.resolve([])
  }

  return new Promise((resolve, reject) => {
    let res = []

    let count = 0
    const processData = (idx, data, ) => {
      res[idx] = data;
      if (++count === values.length) {
        resolve(res)
      }
    }

    for (let i = 0; i < values.length; i++) {
      let current = values[i]
      if ((typeof current === 'object' && current !== null)
        || typeof current === 'function') {
        if (typeof current.then === 'function') { // 是promise
          current.then(data => {
            processData(i, data)
          }, reject)
        }
        else {
          processData(i, current)
        }
      } else {
        processData(i, current)
      }
    }
  })
}