//setTimeout is async
console.log('I will console log first');

setTimeout(() => {
    console.log('i will log last');
}, 5000);

console.log('i will log second');