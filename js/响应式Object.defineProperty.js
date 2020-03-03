
function someOtherOption() {
  console.log('someOtherOption')
}

const oldArrayPrototype = Array.prototype
const newArrayPrototype = Object.create(oldArrayPrototype);
['push', 'pop', 'shift', 'unshift', 'splice', 'reverse', 'sort'].forEach(method => {
  newArrayPrototype[method] = function () {
    someOtherOption()
    oldArrayPrototype[method].call(this, ...arguments)
  }
})

function observe(target) {
  if (typeof target !== 'object' && target !== null) {
    return
  }

  if (Array.isArray(target)) {
    target.__proto__ = newArrayPrototype
  }

  for (const key in target) {
    if (target.hasOwnProperty(key)) {
      const val = target[key];
      defineReactive(target, key, val)
    }
  }

}


function defineReactive(target, key, val) {
  observe(val)
  Object.defineProperty(target, key, {
    get: function () {
      return val
    },
    set: function (newVal) {
      if (val !== newVal) {
        someOtherOption()
      }
    }
  })
}


let data = {
  name: 'tom',
  age: {
    n: 100
  },
  children: [1, 2.3, 4]
}

// 利用Object.definePrototype 观察数据
observe(data)

// data.name = 'jack'
// data.age.n = 300
data.children.push(500) // push pop unshift shift reverse sort splice
