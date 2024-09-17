const express = require('express')
const router = express.Router()

const { people } = require('../data')


router.get('/', (req, res) => {
    res.status(200).json({ success: true, data: people })
})

router.post('/', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(401).json({ success: false, msg: "please provide your name" })
    }
    res.status(200).json({ success: true, person: name })
})

router.post('/postman', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(401).json({ success: false, msg: "please provide your name" })
    }
    res.status(200).json({ success: true, people: [...people, { id: people.length + 1, name: name }] })
})

router.put('/:id', (req, res) => {
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

router.delete('/:id', (req, res) => {
    person = people.find((person) => person.id === Number(req.params.id))
    if (!person) {
        return res.status(401).json({ success: false, msg: `no person with id ${req.params.id}` })
    }

    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
    res.status(200).json({ success: true, data: newPeople })
})

module.exports = router