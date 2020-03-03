
/**
 * 异步并行任务控制
 */

//  ----------------------------------------------------------
var count = 0
const parllelCount = 3

function run(parllelCount) {
  for (var i = 0; i < parllelCount; i++) {
    control()
  }
}

function control(params) {
  console.log('正在执行的任务个数: ', count)
  if (count < 3) {
    let task = taskList.shift()
    if (task) {
      exectutor(task)
    }
  }
}

function exectutor(task) {
  count++
  task.then(data => {
    console.log('任务成功: ', data)
  }).catch(error => {
    console.log('任务失败: ', error)
  }).finally(() => {
    count--
    console.log('任务队列长度: ', taskList.length)
    control()
  })
}

// run(parllelCount)




//------------------------------------------------------

function sendRequest(arr, max, callback) {
  let fetchArr = [],  // 存储并发max的promise数组
    i = 0;

  function toFetch() {
    if (i === arr.length) {   // 所有的都处理完了， 返回一个resolve
      return Promise.resolve();
    }

    // let one = fetch(arr[i++]); // 取出第i个url， 放入fetch里面 , 每取一次i++
    let task = new Promise((resolve, reject) => {
      let index = i;
      i++
      setTimeout(() => {
        console.log('完成: ' + arr[index])
        resolve(arr[index])
      }, arr[index] * 1000);

    })

    fetchArr.push(task);  //将当前的promise存入并发数组中
    task.then((data) => {
      fetchArr.splice(fetchArr.indexOf(task), 1)
      console.log(data)
    }); // 当promise执行完毕后，从数组删除

    let p = Promise.resolve();
    if (fetchArr.length >= max) {     // 当并行数量达到最大后， 用race比较 第一个完成的， 然后再调用一下函数自身。
      p = Promise.race(fetchArr);
    }
    return p.then(() => toFetch());
  }

  // arr循环完后， 现在fetchArr里面剩下最后max个promise对象， 使用all等待所有的都完成之后执行callback
  toFetch().then(() => Promise.all(fetchArr)).then(() => {
    callback();
  })

}

var arr = [10, 8, 20, 16, 3, 1, 2, 4]
var max = 3;
const cb = () => { console.log('执行完毕') }

// sendRequest(arr, max, cb)




/**
 * 异步串行控制
 */

////------------------------------------------------------------------------

const timeout = ms => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, ms);
});

const ajax1 = () => timeout(2000).then(() => {
  console.log('1');
  return 1;
});

const ajax2 = () => timeout(1000).then(() => {
  console.log('2');
  return 2;
});

const ajax3 = () => timeout(2000).then(() => {
  console.log('3');
  return 3;
});


/**
 * 函数递归实现
 */

const mergePromise = ajaxArray => {
  // 在这里实现你的代码
  let res = []
  return new Promise((resolve, reject) => {
    const next = idx => {
      if (idx === ajaxArray.length) {
        resolve(res)
      } else {
        ajaxArray[idx]()
          .then(data => {
            res.push(data)
            next(++idx)
          })
      }
    }
    next(0)
  })
};


/**
 * promise链
 */

const mergePromise2 = ajaxArray => {
  // 在这里实现你的代码
  let res = []
  let sequence = Promise.resolve()
  ajaxArray.forEach(ajax => {
    sequence = sequence
      .then(ajax)
      .then(data => {
        res.push(data)
        return res
      })
  })
  return sequence
};


/**
 * promise链reduce改进版
 */
const mergePromise3 = ajaxArray => {
  // 在这里实现你的代码
  let res = []
  ajaxArray.reduce((sequence, ajax) => {
    return sequence
      .then(ajax())
      .then(data => {
        res.push(data)
        return res
      })
  }, Promise.resolve())
  return sequence
};

mergePromise2([ajax1, ajax2, ajax3]).then(data => {
  console.log('done');
  console.log(data); // data 为 [1, 2, 3]
});