function deepClone(obj, cache = []) {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  const find = cache.filter(item => item.original === obj)[0]
  if (find) {
    return find.copy
  }

  const copy = Array.isArray(obj) ? [] : {}

  cache.push({
    original: obj,
    copy
  })

  Object.keys(obj).forEach(key => {
    copy[key] = deepClone(obj[key], cache)
  })
}