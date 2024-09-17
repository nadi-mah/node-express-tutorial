const express = require('express')

const app = express()

//app.get

app.get('/', (req, res) => {
    res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
    res.status(200).send('About Page')
})

//app.all

app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource Not Found</h1>')
})
//app.listen

app.listen(5000, () => {
    console.log('server listening on port 5000...');
})