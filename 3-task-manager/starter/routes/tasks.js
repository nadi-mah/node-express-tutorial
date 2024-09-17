const express = require('express')
const router = express.Router()

const { getAllTasks,
    createTasks,
    getTask,
    updateTasks,
    deleteTasks } = require('../controllers/tasks')

// router.route('/').get(getAllTasks)
// router.route('/').post(createTasks)
// router.route('/:id').get(getTask)
// router.route('/:id').patch(updateTasks)
// router.route('/:id').delete(deleteTasks)

router.route('/').get(getAllTasks).post(createTasks)
router.route('/:id').get(getTask).patch(updateTasks).delete(deleteTasks)

module.exports = router