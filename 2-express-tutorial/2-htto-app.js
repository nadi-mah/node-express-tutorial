//we can just set up our brower with http modules but it is hard
//so we use express

const http = require('http')
const {readFileSync} = require('fs')

const homePageContent = readFileSync('./navbar-app/index.html')
const styleContent = readFileSync('./navbar-app/styles.css')
const photoContent = readFileSync('./navbar-app/logo.svg')
const logicContent = readFileSync('./navbar-app/browser-app.js')

http.createServer((req, res) => {
    console.log(req.url);
    const url = req.url
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(homePageContent)
        res.end()
    }
    else if (url === '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css' })
        res.write(styleContent)
        res.end()
    }
    else if (url === '/browser-app.js'){
        res.writeHead(200, { 'content-type': 'text/javascript' })
        res.write(logicContent)
        res.end()
    }
    else if(url === '/logo.svg'){
        res.writeHead(200, {'content-type': 'image/svg+xml'})
        res.write(photoContent)
        res.end()
    }
    else{
        res.writeHead(404, '')
        res.end()
    }
}).listen(5000)