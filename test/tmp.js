function repeat(fun, times, wait) {
  return function name(...args) {
    for (let i = 0; i < times; i++) {
      setTimeout(() => {
        fun.call(null, ...args)
      }, wait * i);
    }
  }

}

const repeatFunc = repeat(console.log, 4, 3000)

// repeatFunc('hello world')



function Event() {
  this._events = {}
}

Event.prototype.on = function (name, cb) {
  (this._events[name] || (this._events[name] = [])).push(cb)
}

Event.prototype.tigger = function (name, ...rest) {
  let cbs = this._events[name]
  if (cbs) {
    for (var i = 0; i < cbs.length; i++) {
      cbs[i](...rest)
    }
  }
}

Event.prototype.off = function (name) {
  delete this._events[name]
}

var event = new Event()

event.on('dispatch', function (o) {
  console.log(o)
})

event.on('dispatch', function (o) {
  console.log(o + 'sd ')
})

event.tigger('dispatch', { foo: 'foo' })


Function.prototype.bind2 = function (obj, ...rest) {
  let _self=this
  return function (...args) {
    _self.apply(obj,[...rest,...args])
  }
}