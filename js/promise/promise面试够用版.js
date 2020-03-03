const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  constructor(exec) {
    super(exec)

    this.value = ''
    this.state = PENDING

    this.resolveCallbacks = []
    this.rejectCallbacks = []

    function resolve(value) {
      if (this.state === PENDING) {
        this.value = value;
        this.state = FULFILLED
        this.resolveCallbacks.forEach(cb => cb())
      }
    }

    function reject(reason) {
      if (this.state === PENDING) {
        this.value = reason;
        this.state = REJECTED
        this.rejectCallbacks.forEach(cb => cb())
      }
    }

    if (typeof exec !== 'function') {
      throw Error('exec must be typeof function')
    }

    try {
      exec(resolve, reject)
    } catch (error) {
      reject(error)
    }

  }

  then(onResolve, onReject) {
    let self = this

    onResolve = typeof onResolve === 'function' ? onResolve : value => value
    onReject = typeof onReject === 'function' ? onReject : reason => { throw reason }

    let promise2 = new MyPromise((resolve, reject) => {
      if (this.state === PENDING) {
        this.resolveCallbacks.push(() => {
          setTimeout(() => {
            try {
              //PromiseA+ 2.2.7.1
              let x = onResolve(self.value);
              resolvePromise(x, resolve, reject);
            } catch (e) {
              //PromiseA+ 2.2.7.2
              reject(e);
            }
          });
        })

        this.rejectCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onReject(self.value);
              resolvePromise(x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          });
        })
      }

      if (this.state === FULFILLED) {
        setTimeout(() => {
          try {
            //PromiseA+ 2.2.7.1
            let x = onResolve(self.value);
            resolvePromise(x, resolve, reject);
          } catch (e) {
            //PromiseA+ 2.2.7.2
            reject(e);
          }

        });
      }

      if (this.state === REJECTED) {
        setTimeout(() => {
          try {
            let x = onReject(self.value);
            resolvePromise(x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      }

    })

    return promise2;

  }

  catch(fn) {
    this.then(null, fn)
  }

}

function resolvePromise(value, resolve, reject) {
  if (typeof value === 'object' && value !== null) {
    if (typeof value.then === 'function') {
      try {
        value.then(resolve, reject)
      } catch (error) {
        reject(error)
      }
    } else {
      resolve(value)
    }
  }else{
    resolve(value)
  }
}