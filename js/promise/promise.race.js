Promise.race2 = function (values) {

  return new Promise((resolve, reject) => {
    for (let i = 0; i < values.length; i++) {
      let current = values[i]

      if ((typeof current === 'object' && current !== null) || typeof current === 'function') {
        if (typeof current.then === 'function') {
          current.then(resolve, reject)
        } else {
          resolve(current)
        }
      } else {
        resolve(current)
      }

    }
  })

}