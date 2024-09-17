//built in module 
//fs(file system) => we can use it as non-blocking way(Sync) and blocking way(Async)

const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second);

writeFileSync(
    './content/result.txt',
    `this is the result of: ${first} , ${second}`,
    { flag: 'a' }
)


