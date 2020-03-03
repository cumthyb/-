function debounce1(fn, wait) {
  let timer = null
  return function (...args) {
    if (timer)
      clearTimeout(timer)

    timer = setTimeout(() => {
      fn(...args)
    }, wait);
  }
}


/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */

const _debounce = (func, wait, immediate) => {
  let timeout
  return function () {
    const context = this
    const args = arguments

    const later = function () {
      timeout = null
      if (!immediate) {
        func.apply(context, args)
      }
    }
    const callNow = immediate && !timeout

    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(later, wait)
    if (callNow) {
      func.apply(context, args)
    }
  }
}

function throttle1(fn, wait) {
  let pre = null
  return function (...args) {
    let context = this;
    let now = Date.now()
    if (pre === null || now - pre >= wait) {
      fn.apply(context,args)
      pre = now
    }
  }
}

function throttle2(fn, wait) {
  let timer = null
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        fn(...args)
        timer = null
      }, wait);
    }
  }
}
