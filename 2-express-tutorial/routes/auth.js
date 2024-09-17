const express = require('express')
const router = express.Router()


router.post('/', (req, res) => {
    const { name } = req.body
    if (name) {
        return res.send(`Welcome ${name}`)
    }
    res.send('Enter Your Name')
})

module.exports = router