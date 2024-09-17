const express = require('express')
const app = express()
const connectDB = require('./db/connection')
const tasks = require('./routes/tasks')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddleWare = require('./middleware/error-handler')

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.get('/home', (req, res) => {
    res.send('This is Home Page')
})
app.use(express.static('./public'))
app.use('/api/v1/tasks', tasks)

app.use(notFound)
app.use(errorHandlerMiddleWare)

const port = 3000
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server listening on port ${port}...`);
        })

    } catch (error) {
        console.log(error);
    }
}

start()