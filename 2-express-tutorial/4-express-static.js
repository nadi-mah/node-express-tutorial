const express = require('express')
const path = require('path')
const app = express()


//static and middleware => files that dont need to change
//now we just put css, js and logo in the static folder
//we can also put html file because it does not change neither
app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './navbar-app', './index.html'))
})

app.all('*', (req, res) => {
    res.status(404).send('Resource Not Found')
})


app.listen(5000, () => {
    console.log('server listening on port 5000...');
})