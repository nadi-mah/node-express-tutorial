const express = require('express')
const router = express.Router()

const { getPeople,
    postPeople,
    postPeoplePostman,
    putPeople,
    deletePeople
} = require('./contollers/people')

router.get('/', getPeople)

router.post('/', postPeople)

router.post('/postman', postPeoplePostman)

router.put('/:id', putPeople)

router.delete('/:id', deletePeople)

module.exports = router