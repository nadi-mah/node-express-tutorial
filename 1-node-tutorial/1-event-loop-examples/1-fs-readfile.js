const {readFile} = require('fs')


//readFileascyn is asynchrouns 
console.log('starting reading file');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err)
        return
    }
    console.log(result);
    console.log('completed first task');

})

console.log('task has finished');