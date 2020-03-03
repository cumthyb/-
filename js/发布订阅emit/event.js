/**
 * 实现一个类，可以on,emit,off,once，注册、调用、取消、注册仅能使用一次的事件
 */

class EventEmiter {
  constructor() {
    this._enents = {}
  }

  on(name, fn) {
    (this._enents[name] || (this._enents[name] = [])).push(fn)
  }

  once(name, fn) {
    function on(...args) {
      fn(...args)
      this.off(fn)
    }
    on.fn = fn
    this.on(name, on)
  }

  emit(name, ...rest) {
    let ctx = this
    let cbs = this._enents[name]
    if (cbs) {
      cbs.forEach(cb => {
        cb.call(ctx, ...rest)
      })
    }
  }

  /**
   *移除自定义事件监听器。
   *如果没有提供参数，则移除所有的事件监听器；
   *如果只提供了事件，则移除该事件所有的监听器；
   *如果同时提供了事件与回调，则只移除这个回调的监听器。
   */
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