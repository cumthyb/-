Promise.allLimit = function (arr, wrap, limit, callback) {
  return new Promise((resolve, reject) => {
    var total = arr.length;
    var result = new Array(total);
    var rejected = false;
    var dones = 0;
    function run(n) {
      setTimeout(() => {
        wrap(n, arr.shift()).then(res => {
          return typeof callback === 'function' ? callback(n, res) : Promise.resolve(res);
        }).then(res => {
          dones++;
          result[n] = res;
          if (!rejected) {
            if (arr.length) {
              run(total - arr.length);
            } else if (dones === total) {
              resolve(result);
            }
          }
        }).catch(err => {
          rejected = true;
          reject(err);
        });
      }, 0);
    }
    arr.slice(0, limit).forEach((v, n) => {
      run(n);
    });
  });
};

function asyncPool(poolLimit, array, iteratorFn) {
  if (shouldAssert) {
    try {
      assertType(poolLimit, "poolLimit", ["number"]);
      assertType(array, "array", ["array"]);
      assertType(iteratorFn, "iteratorFn", ["function"]);
      assert(array.length, "Parameter `array` must have at least one item");
    } catch (error) {
      return Promise.reject(error);
    }
  }
  let i = 0;
  const ret = [];
  const executing = [];
  const enqueue = function () {
    if (i === array.length) {
      return Promise.resolve();
    }
    const item = array[i++];
    const p = Promise.resolve().then(() => iteratorFn(item, array));
    ret.push(p);
    const e = p.then(() => executing.splice(executing.indexOf(e), 1));
    executing.push(e);
    let r = Promise.resolve();
    if (executing.length >= poolLimit) {
      r = Promise.race(executing);
    }
    return r.then(() => enqueue());
  };
  return enqueue().then(() => Promise.all(ret));
}


////------------------------------------------------------------------------

/**
 * 模拟异步任务
 */
var output = function (i, fn1, fn2) {
  setTimeout(() => {
    // Math.random() > 0.5
    //   ? fn1()
    //   : fn2()
    console.log(i)
    fn1('success' + i)
  }, i * 1000);
}


/**
 * 模拟异步任务包
 */
var taskList = []
taskList = [1, 8, 2, 6, 3, 8, 5, 4].map((item, index) => {
  return new Promise((resolve, reject) => {
    output(item, resolve, reject)
    // setTimeout(() => {
    //   var rd = Math.random() > 0.5
    //   if (rd) {
    //     resolve('success' + item)
    //   } else {
    //     reject('failed' + item)
    //   }
    // }, item * 1000);
  })
})

// Promise.all(taskList).then(datas => {
//   console.log(datas);
// }).catch(err => {
//   console.log(err);
// })


// Promise.all2(taskList).then(datas => {
//   console.log(datas);
// }).catch(err => {
//   console.log(err);
// })


Promise.race(taskList).then(data => {
  console.log('race完成')
})



