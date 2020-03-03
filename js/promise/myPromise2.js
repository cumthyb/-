const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

class MyPromise {
  constructor(executor) {
    this.value = undefined
    this.reason = undefined
    this.status = PENDING
    this.onResolvedCallbacks = []
    this.onRejectedCallbacks = []
    const reslove = value => {
      if (this.status === PENDING) {
        this.value = value;
        this.status = FULFILLED
        this.onResolvedCallbacks.forEach(cb => cb(value))
      }
    }

    const reject = reason => {
      if (this.status === PENDING) {
        this.reason = reason;
        this.status = REJECTED
        this.onRejectedCallbacks.forEach(cb => cb(reason))
      }
    }

    try {
      executor(reslove, reject)
    } catch (error) {
      reject(error)
    }

  }

  then(onFulfilled, onRejected) {
    let promise2 = new MyPromise((resolve, reject) => {

      if (this.status === PENDING) {
        this.onResolvedCallbacks.push((value) => {
          setTimeout(() => {
            try {
              let x = onFulfilled(value)
              resolvePromise(promise2, x, resolve, reject)
            } catch (error) {
              reject(error)
            }
          });

        })

        this.onRejectedCallbacks.push((reason) => {
          setTimeout(() => {
            try {
              let x = onRejected(reason)
              resolvePromise(promise2, x, resolve, reject)
            } catch (error) {
              reject(error)
            }
          });

        })
      }

      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value)
            resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        });
      }

      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        });

      }
    })

    return promise2

  }

  catch(onRejected) {
    this.status = REJECTED
    onRejected(this.reason)
  }

}

const resolvePromise = (promise2, x, resolve, reject) => {
  if (promise2 === x) {
    return reject(new TypeError('xxxx'))
  }
  if ((typeof x === 'object' && x != null) || (typeof x === 'function')) {
    // 可能是promise

    try {
      // 取then可能异常
      let then = x.then
      if (typeof then === 'function') {
        then.call(x, y => {
          reslove(y)
        }, r => {
          reject(r)
        })
      } else {
        reslove(x)
      }
    } catch (error) {
      reject(error)
    }

  } else {
    // x 是普通值
    resolve(x)
  }
}



module.exports = MyPromise