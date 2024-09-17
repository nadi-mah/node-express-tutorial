//built in modules
//os => provides information about the computer operating system


//current user info
const os = require('os')
console.log(os.userInfo());

//user uptime
console.log(`the user uptime is ${os.uptime()} seconds`);

let osCurrent = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}

console.log(osCurrent);