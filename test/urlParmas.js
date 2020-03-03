var url = `http://www.baidu.com:8181/a/b/c/d?id=123&name=tom&age=12&address=&score=1&score=2/#/jkgjsk/jkjljlhho`

var queryStr = decodeURIComponent(url).split('?')[1]

var reg = /(?<key>[^=?/&#]+)=(?<value>[^=?/&#]+)/g

var res = reg.exec(queryStr)

var queryObj = {}
while (res) {
  const { key, value } = res.groups
  if (key in queryObj) {
    if (Array.isArray(queryObj[key])) {
      queryObj[key].push(value)
    } else {
      queryObj[key] = [queryObj[key], value]
    }
  } else {
    queryObj[key] = value
  }
  res = reg.exec(queryStr)
}

console.log(queryObj)