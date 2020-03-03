var reg = /^(?<proto>https?):\/\/(?<host>([\w\.]+))(:(?<port>\d+))?(?<path>[^\?]+)\?(?<query>[\w&=]+)\b/


var url = `http://www.baidu.com:8181/a/b/c/d?id=123&name=tom&age=12&address=&score/#/jkgjsk/jkjljlhho`
var getQuery = (url) => {
  const queryStr = url.split('?')[1]
  const reg = /(?<key>[\w\.]+)(=(?<value>[\w\.]+))?&?/g
  var match;
  var query = {}
  while (match = reg.exec(queryStr)) {
    // console.log(match)
    query[match.groups.key] = match.groups.value
  }
  return query
}

getQuery(url)




/*
 参数中可能有数组
*/

var qStr = '?uname=dingding&upwd=12345&favs=swimming&favs=running&favs=basketball&other=&kell'

function url2Obj(url) {
  var reg = /(?<key>[^=?/&#]+)=(?<value>[^=?/&#]+)/g
  var res = reg.exec(url)
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
}

var obj = url2Obj(qStr)
console.dir(obj)




/**
 * 终极版
 */

 var url=`https://www.baidu.com/s?ie=utf-8&csq=1&pstg=20&mod=2&isbd=1&cqid=f18c91de00150f0f&istc=580&ver=Qth8TwoC0r0ajeyeofDUmu9W1rh8XCePCYi&chk=5e14833b&isid=8E629AE552631814&ie=utf-8&f=8&rsv_bp=1&rsv_idx=2&tn=monline_3_dg&wd=%E9%9F%A9%E5%9B%BD&rsv_spt=1&oq=%25E9%259F%25A9%25E5%259B%25BD&rsv_pq=d0777cc5003fe2e7&rsv_t=b5e8s3FMGigVJg%2B69u%2BMBHDmCoBkWnYbu4R%2FsCzCB7yzmDMajIwtSo6TpCWGwcQUMkqA&rqlang=cn&rsv_enter=0&rsv_dl=tb&bs=%E9%9F%A9%E5%9B%BD&f4s=1&_ck=62023.1.80.27.18.588.29&isnop=0&rsv_stat=-2&rsv_bp=1`

 var reg=/([^?=&#]+)=([^?&=#]+)/g

 var res={}

 url.replace(reg,(m,$1,$2)=>{
   res[$1]= decodeURI($2) 
 })

 console.table(res)
