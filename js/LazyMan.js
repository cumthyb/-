// 5. 实现一个LazyMan，可以按照以下方式调用
// 实现一个LazyMan，可以按照以下方式调用:
// LazyMan('Hank')输出:
// Hi! This is Hank!
// LazyMan('Hank').sleep(10).eat('dinner')输出
// Hi! This is Hank!
// //等待10秒..
// Wake up after 10
// Eat dinner~
// LazyMan('Hank').sleep(10).eat('dinner').eat('supper')输出
// Hi This is Hank!
// Eat dinner~
// Eat supper~
// LazyMan('Hank').sleepFirst(5).eat('supper')输出
// //等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper~
// 以此类推。

function LazyMan(name) {

  function Man(name) {
    this.name = name
    this.queue = []
    this.sayHi()
    Promise.resolve().then(() => {
      this.next()
    })
  }

  Man.prototype.next = function () {
    let cb = this.queue.shift()
    cb && cb.call(this)
    return this
  }

  Man.prototype.sayHi = function () {
    console.log(`Hi This is ${this.name}`)
  }

  Man.prototype.sleep = function (time) {
    this.queue.push(() => {
      setTimeout(() => {
        console.log(`Wake up after ${time}`)
        this.next()
      }, time * 1000);

    })

    return this
  }

  Man.prototype.sleepFirst = function (time) {

    this.queue.unshift(() => {
      setTimeout(() => {
        console.log(`Wake up after ${time}`)
        this.next()
      }, time * 1000);
    })
    return this
  }

  Man.prototype.eat = function (food) {

    this.queue.push(() => {
      console.log(`eat ${food}`)
      this.next()
    })
    return this
  }

  return new Man(name)
}

// LazyMan('Hank').sleep(10).eat('dinner')
LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');