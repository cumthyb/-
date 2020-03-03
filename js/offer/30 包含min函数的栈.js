/*
题目：
定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的min函数。
要求：
在该栈中，调用min、push、pop的时间复杂度都是O(1)。
*/

//用一个辅助空间，保存每次推入时的最小值情况，同时伴随弹出这个辅助空间的栈顶最小值也会弹出

class Stack {
  constructor() {
    this.datas = []
    this.mins = []
  }

  pop() {
    this.datas.pop()
    this.mins.pop()
  }

  push(val) {
    this.datas.push(val)
    const getMin = datas => Math.min(...datas)
    const min = getMin(this.datas)
    this.mins.push(min)
  }

  min() {
    let len = this.mins.length
    return this.mins[len - 1]
  }

}

var stack = new Stack()
stack.push(3)
stack.push(4)
stack.push(2)
stack.push(1)

console.log(stack)