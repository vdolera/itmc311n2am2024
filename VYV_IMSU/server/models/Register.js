const mongoose = require('mongoose')

const RegisterSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    userType: String
})

const RegisterModel = mongoose.model("register", RegisterSchema);
module.exports = RegisterModel;