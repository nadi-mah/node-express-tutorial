const express = require('express')
const app = express()

// req => middleware => res
// it will be kind of messy if we write the middleware here in app.js

//options of using milddleware - our own - express - third party
//importing (our own) option


//instead of passing the middleware as parameter to all our GETs we simiply use app.use

/*this is (our own) option*/
const logger = require('./middleware')
const authorized = require('./authorized')
//app.use([logger, authorized])

/*this is (express/ built in) option*/
// app.use(express.static('./public'))

/*this is (third party) option*/
//we have to install first from npm
const morgan = require('morgan')
app.use(morgan('tiny'))


// app.get('/', logger, (req, res) => {
//     res.send('Home')
// })

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})
app.listen(5000), () => {
    console.log('server listen on port 5000...');
}