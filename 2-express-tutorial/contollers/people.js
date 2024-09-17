const { people } = require('../data')


const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people })
}

const postPeople = (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(401).json({ success: false, msg: "please provide your name" })
    }
    res.status(200).json({ success: true, person: name })
}

const postPeoplePostman = (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(401).json({ success: false, msg: "please provide your name" })
    }
    res.status(200).json({ success: true, people: [...people, { id: people.length + 1, name: name }] })
}

const putPeople = (req, res) => {
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
}

const deletePeople = (req, res) => {
    person = people.find((person) => person.id === Number(req.params.id))
    if (!person) {
        return res.status(401).json({ success: false, msg: `no person with id ${req.params.id}` })
    }

    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
    res.status(200).json({ success: true, data: newPeople })
}

module.exports = {
    getPeople,
    postPeople,
    postPeoplePostman,
    putPeople,
    deletePeople
}