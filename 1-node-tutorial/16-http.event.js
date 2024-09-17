const http = require('http')

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// Using Event Emitter API
const server = http.createServer()

server.on('request', (req, res) => {
  res.end('Welcome')
})
//server emit this request event/ we describe(on) it and the server emit it

server.listen(5000)

