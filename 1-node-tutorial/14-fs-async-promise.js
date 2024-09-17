const { readFile, writeFile } = require('fs').promises



// const promFunc = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err)
//             }
//             resolve(data)
//         })
//     })
// }


//First Way (promise callback)

// promFunc('./content/first.txt')
//     .then(result => console.log(result))
//     .catch(err => console.log(err))
//     .finally('async pattern is done.')

//Second Way (async await)

const func = async () => {
    try {
        const result = await readFile('./content/first.txt', 'utf8')
        await writeFile('./content/result', `the result is ${result}`, { flag: 'a' })
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

func()