// 红灯3秒亮一次，黄灯2秒亮一次，绿灯1秒亮一次；如何让三个灯不断交替重复亮灯？（用Promise实现）三个亮灯函数已经存在：
function red() {
  console.log('red');
}
function green() {
  console.log('green');
}
function yellow() {
  console.log('yellow');
}


function light(cb, time) {
  return new Promise(resolve => {
    setTimeout(() => {
      cb()
      resolve()
    }, time);
  })

}


function control() {
  Promise.resolve().then(() => {
    return light(red, 3000)
  }).then(() => {
    return light(green, 2000)
  }).then(() => {
    return light(yellow, 1000)
  }).then(() => {
    return control()
  })
}

control()