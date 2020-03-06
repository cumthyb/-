let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';
parseParam(url)
/* 结果
{ user: 'anonymous',
  id: [ 123, 456 ], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
  city: '北京', // 中文需解码
  enabled: true, // 未指定值得 key 约定为 true
}
*/

function parseParam(url) {
  let _url = decodeURIComponent(url)
  let queryStr = _url.split('?')
  if (queryStr.length < 2) {
    return null
  }
  let reg = /(?<key>[^#?&]+)=(?<val>[^#?&]+)?/g
  let exec = reg.exec(queryStr[1])
  let res = {}
  while (exec) {
    let { key, val } = exec.groups
    if (val === null) {
      val = true
    }
    if (key in res) {
      if (!Array.isArray(res[key])) {
        res[key] = [res[key]]
      }
      res[key].push(val)
    } else {
      res[key] = val
    }
    exec = reg.exec(queryStr[1])
  }
  return res
}
