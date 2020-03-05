const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  constructor(exec) {
    super(exec)
    this.state = PENDING
    this.value = ''
    this.reason = ''
    this.resolveCallbacks = []
    this.rejectCallbacks = []

    function resolve(data) {
      if (this.state === PENDING) {
        this.state = FULFILLED;
        this.value = data;
        this.resolveCallbacks.forEach(cb => cb())
      }
    }

    function reject(reason) {
      if (this.state === PENDING) {
        this.state = REJECTED
        this.reason = reason
        this.rejectCallbacks.forEach(cb => cb())
      }
    }

    if (typeof exec !== 'function') {
      throw Error('must be typeof function')
    }

    try {
      exec(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onResolve, onReject) {
    onResolve = typeof onResolve === 'function' ? onResolve : (value) => value
    onReject = typeof onReject === 'function' ? onReject : (reason) => { throw reason }

    let _self = this
    let promise2 = new MyPromise((resolve, reject) => {
      if (_self.state === PENDING) {

        _self.resolveCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onResolve(_self.value)
              handlePromise(promise2, x, resolve, reject)
            } catch (error) {
              reject(error)
            }

          }, 0);
        })

        _self.rejectCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onReject(_self.reason)
              handlePromise(promise2, x, resolve, reject)
            } catch (error) {
              reject(error)
            }

          }, 0);
        })

      } else if (_self.satat === FULFILLED) {

        setTimeout(() => {
          try {
            let x = onResolve(_self.value)
            handlePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }

        });


      } else {
        setTimeout(() => {
          try {
            let x = onReject(_self.reason)
            handlePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        }, 0);

      }
    })
    return promise2

  }
}

function handlePromise(promise, x, resolve, reject) {
  if (promise === x) {
    reject(new Error('circle promise'))
  }

  if (((typeof x === 'object' && x !== null)) || typeof x === 'function') {
    let then = x.then
    if (typeof then === 'function') {
      then.call(x, resolve, reject)
    } else {
      resolve(x)
    }
  } else {
    resolve(x)
  }

}