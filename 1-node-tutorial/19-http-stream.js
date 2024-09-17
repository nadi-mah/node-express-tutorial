const http = require('http')
const {createReadStream} = require('fs')

http.createServer((req,res) => {
    const fileStream = createReadStream('./content/big.txt', 'utf8')
    console.log(fileStream);

    fileStream.on('open', () => {
        fileStream.pipe(res)
    })
}).listen(5000)

