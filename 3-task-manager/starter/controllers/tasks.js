const Task = require('../models/Task')
const asyncWapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')


/* The old version of the functions without using asyncWrapper middleware*/

// const getAllTasks = async (req, res) => {
//     try {
//         const tasks = await Task.find({})
//         res.status(200).json({ tasks })
//     } catch (error) {
//         res.status(500).send({ msg: error })
//     }

// }

/* With using asyncWapper middleware */
/* By using this asyncWapper middleware we ruined the error so we should write an error-handler middleware */
// GET
const getAllTasks = asyncWapper(async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
})

// POST
const createTasks = asyncWapper(async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
})

// GET
const getTask = asyncWapper(async (req, res, next) => {
    const { id: taskID } = req.params
    const singleTask = await Task.findOne({ _id: taskID })
    if (!singleTask) {
        return next(createCustomError(`no task with id : ${taskID}`, 404))
    }
    res.status(200).json({ singleTask })
})

// PATCH
const updateTasks = asyncWapper(async (req, res, next) => {
    const { id: taskID } = req.params
    const updateTask = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
        new: true,
        runValidators: true
    })
    console.log(updateTask);
    if (!updateTask) {
        return createCustomError(`no task with id ${taskID}`, 404)
    }
    res.status(200).send(updateTask)
})

// DELETE
const deleteTasks = asyncWapper(async (req, res, next) => {
    const { id: taskID } = req.params
    const task = await Task.findOneAndDelete({ _id: taskID })
    if (!task) {
        return next(createCustomError(`no task with id : ${taskID}`, 404))
    }
    res.send(`deleted task with id ${taskID}`)
})


module.exports = {
    getAllTasks,
    createTasks,
    getTask,
    updateTasks,
    deleteTasks
}