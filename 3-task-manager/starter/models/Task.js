const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'must provide a name'],
        maxlength: [20, 'name can not be more than 20 charectors']
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', taskSchema)