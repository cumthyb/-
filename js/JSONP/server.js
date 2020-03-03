const http = require('http')
const URL = require('url')

const server = http.createServer()

server.on('request', (req, res) => {
  console.log(req)
  const url = URL.parse(req.url, true)
  const cb = url.query.callback;
  console.log(cb)
  res.end(`${cb}(${Date.now()})`)
})


server.listen(8000, () => {
  console.log('start server')
})


