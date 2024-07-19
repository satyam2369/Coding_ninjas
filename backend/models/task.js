const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    title: String,
    date: {
        type: Date,
        default: Date.now
    },
    des: String,
    priority: String,
    uid:String
})

module.exports = mongoose.model("task", taskSchema);