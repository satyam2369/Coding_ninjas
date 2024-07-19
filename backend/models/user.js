const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:String,
    email:String,
    Password:String
})

module.exports = mongoose.model("user" , userSchema);