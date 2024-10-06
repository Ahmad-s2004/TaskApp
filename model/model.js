const mongoose = require('mongoose')

const Schema = mongoose.Schema

let UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    phone: { type: String, required: true}
}) 



let User = mongoose.model('User', UserSchema)
module.exports = User 
