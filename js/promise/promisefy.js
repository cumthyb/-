function promisify(fn) {
  return function () {
    return new Promise((resolve, reject) => {
      fn(...arguments, function (err, data) {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
    })
  }
}


