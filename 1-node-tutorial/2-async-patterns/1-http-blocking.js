//BLOCKING async
//because of the blocking code in the about url ...
//not only /about get in trouble but also reaching the other urls got hard
const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end('Hello and welcome to my home page.')
    }
    else if (req.url === "/about") {

        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`);
            }
        }

        res.end('This is the abot page')
    }
    else {
        res.end(`
    <h1>Ooops!</h1
    <p>The page you're looking for does not exists</p>
    <a href="/">back home. </a>   
        `)
    }
})

server.listen(5000, () => {
    console.log('server listening to port 5000...');
})

