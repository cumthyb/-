
class MessageQueue {
  constructor() {
    this._queue = []
  }

  add(task) {
    this._queue.push(task)
  }

  fire() {
    let _this = this
    function run() {
      if (_this._queue.length) {
        let tmp = _this._queue.shift()
        let { cb, waitTime } = tmp
        setTimeout(() => {
          cb(waitTime)
          run()
        }, waitTime);
      }
    }
    run()
  }
}

function Task(cb, waitTime = 0) {
  this.cb = cb
  this.waitTime = waitTime
}


/////////////////////////////test/////////////////////////////

let cb = (wait) => {
  console.log(wait);
  console.log((new Date()).toTimeString());
}

let mq = new MessageQueue()

mq.add(new Task(cb, 5000))
mq.add(new Task(cb))
mq.add(new Task(cb, 1000))
mq.add(new Task(cb))
mq.add(new Task(cb, 1000))
mq.add(new Task(cb, 600))
mq.add(new Task(cb, 10000))

mq.fire()