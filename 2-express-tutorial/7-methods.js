const express = require('express')
const app = express()

const { people } = require('./data')

// middleware
app.use(express.static('./methods-public'))
app.use(express.urlencoded({ extended: false })) //for accessing req.body
app.use(express.json()) // i don know:/


// GET
app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
})

//POST
app.post('/login', (req, res) => {
    const { name } = req.body
    if (name) {
        return res.send(`Welcome ${name}`)
    }
    res.send('Enter Your Name')
})

app.post('/api/people', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(401).json({ success: false, msg: "please provide your name" })
    }
    res.status(200).json({ success: true, person: name })
})

app.post('/api/postman/people', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(401).json({ success: false, msg: "please provide your name" })
    }
    res.status(200).json({ success: true, people: [...people, { id: people.length + 1, name: name }] })
})

// PUT
app.put('/api/people/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body

    person = people.find((person) => person.id === Number(id))
    if (!person) {
        return res.status(401).json({ success: false, msg: `no person with id ${id}` })
    }

    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    res.status(200).json({ success: true, data: newPeople })
})

// DELETE
app.delete('/api/people/:id', (req, res) => {
    person = people.find((person) => person.id === Number(req.params.id))
    if (!person) {
        return res.status(401).json({ success: false, msg: `no person with id ${req.params.id}` })
    }

    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
    res.status(200).json({ success: true, data: newPeople })
})


app.listen(5000, () => {
    console.log('server listen on port 5000...');

})