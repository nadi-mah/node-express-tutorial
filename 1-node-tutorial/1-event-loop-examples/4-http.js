//listen is async

const http = require('http')

const server = http.createServer((req, res) => {
    console.log('request');
    res.end(`
    <p>Hello There</p>
        `)
})

server.listen(5000, () => {
    console.log('The server is ready');
})