/*
题目：
用两个栈实现一个队列。
要求：
队列的声明如下，请实现它的两个函数push(队尾压入)和pop(队头弹出)，
分别完成在队列尾部插入节点和在队列头部删除节点的功能
*/

class Stack {
  constructor() {
    this._queue1 = []
    this._queue2 = []
  }

  push(val) {
    this._queue1.push(val)
  }

  pop() {
    while (this._queue1.length > 1) {
      this._queue2.push(this._queue1.shift());
    }

    let result = this._queue1.shift();

    while (this._queue2.length !== 0) {
      this._queue1.push(this._queue2.shift());
    }
    
    return result;
  }

}