//built in module
//http => working with the server from backend

const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.end('Hello and welcome to my home page.')
    }
    else if(req.url === "/about"){
       res.end('This is the about page') 
    }
    else {res.end(`
    <h1>Ooops!</h1
    <p>The page you're looking for does not exists</p>
    <a href="/">back home. </a>   
        `)
    }
})

server.listen(5000)

