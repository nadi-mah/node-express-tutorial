const express = require('express')
const app = express()

const people = require('./routes/people')
const auth = require('./routes/auth')

// middleware
app.use(express.static('./methods-public'))
app.use(express.urlencoded({ extended: false })) //for accessing req.body
app.use(express.json()) // i don know:/


app.use('/api/people', people)
app.use('/login', auth)


app.listen(5000, () => {
    console.log('server listen on port 5000...');

})