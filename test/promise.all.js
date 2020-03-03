Promise.all2 = function (pArr) {
  if (!pArr) {
    throw Error('error')
  }

  let len = pArr.length
  if (len === 0) {
    return Promise.resolve([])
  } else {

    return new Promise((resolve, reject) => {
      let res = new Array(len)
      let i = 0
      const processResolve = (idx, data, len) => {
        res[idx] = data;
        if (++i === len) {
          resolve(res)
        }
      }
      for (let i = 0; i < len; i++) {
        let p = pArr[i]

        if ((typeof p === 'object' && p !== null) || typeof p === 'function') {
          let then = p.then
          if (typeof then === 'function') {
            then(data => {
              processResolve(i, data, len)
            }, reject)
          } else {
            processResolve(i, p, len)
          }
        } else {
          processResolve(i, p, len)
        }


      }
    })

  }
}

