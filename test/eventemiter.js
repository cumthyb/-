class EventEmiter {
  constructor() {
    this._event = {}
  }

  on(name, fn) {
    (this._event[name] || (this._event[name] = [])).push(fn)
  }

  once(name, fn) {
    function on() {
      fn.call(...arguments)
      this.off(name, fn)
    }
    on.fn = fn
    this.on(name, on)
  }

  emit(name, ...rest) {
    let cbs = this._event[name]
    if (cbs) {
      cbs.forEach(cb => {
        cb.call(null, ...rest)
      })
    }
  }

  off(...args) {
    if (args.length === 0) {
      this._event = {}
      return
    }

    if (typeof args[0] !== 'string') {
      throw Error('first arguments must be a string')
    }

    let [name, ...fns] = args
    if (fns.length === 0) {
      delete this._event[name]
      return
    }

    let cbs = this._event[name]
    if (!cbs || cbs.length === 0) {
      return
    }

    function remove(cbs, fn) {
      let len = cbs.length
      while (len--) {
        if (cbs[len] === fn || cbs[len].fn === fn) {
          cbs.splice(len, 1)
        }
      }
    }

    fns.forEach(fn => {
      remove(cbs, fn)
    })

  }
}