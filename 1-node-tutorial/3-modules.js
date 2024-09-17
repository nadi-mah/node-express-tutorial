//Modules

const names = require('./4-names')
const nameHello = require('./5-utils')
const { item, singlePerson } = require('./6-alternative')

require('./7-mind-grenade')

nameHello(names.john)
nameHello(names.peter)

console.log(item);
console.log(singlePerson);