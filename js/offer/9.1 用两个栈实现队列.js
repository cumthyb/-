class Queue {
  constructor() {
    this._stack1 = []
    this._stack2 = []
  }

  appendTail(val) {
    this._stack1.push(val)
  }

  deleteHead() {
    while (this._stack1.length > 1) {
      this._stack2.push(this._stack1.pop())
    }

    let res = this._stack1.pop()

    while (this._stack2.length) {
      this._stack1.push(this._stack2.pop())
    }
    
    return res
  }
}