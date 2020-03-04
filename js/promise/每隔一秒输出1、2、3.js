[1, 2, 3].reduce((acc, item) => {
  acc = acc.then(() => {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(item)
        resolve()
      }, 1000);
    })


  })
  return acc
}, Promise.resolve())