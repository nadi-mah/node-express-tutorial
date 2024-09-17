const { createReadStream } = require('fs')

//default 20kb
//buffer
//highWaterMark control the siza
// const streamResult = createReadStream('./content/big.txt')

const streamResult = createReadStream('./content/big.txt', { highWaterMark: 10000})

streamResult.on('data', (result) => {
    console.log(result);
})

streamResult.on('error', (err) => {
    console.log(err);
})