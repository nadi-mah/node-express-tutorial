// Event

//we listen an Event(on) nad them emit it(emit)

const {EventEmitter} = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', () =>{
    console.log('data recieved');
})
customEmitter.on('response', () =>{
    console.log('next data');
})
customEmitter.emit('response')