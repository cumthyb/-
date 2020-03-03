/**
 * new Queue()
 * .task(1,1000)
 * .task(2,2000)
 * .task(3,3000)
 * .start()
 * 实现该函数，start()后等1秒输出1，再等2秒2，再等3秒3.
 */


class Queue {
  constructor() {
    this._tasks = []
    this._instance = null
  }

  task(id, delay) {
    this._tasks.push({
      fn: (function (id) {
        return () => console.log(id)
      })(id),
      delay
    })
    return this
  }

  start() {
    let len = this._tasks.length
    for (let i = 0; i < len; i++) {
      setTimeout(() => {
        this._tasks[i].fn()
      }, this._tasks[i].delay);
    }
  }
}


new Queue()
  .task(1, 1000)
  .task(2, 2000)
  .task(3, 3000)
  .start()