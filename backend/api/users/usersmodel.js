const mongoose = require('mongoose')

const { Schema } = mongoose

let Post = null

 
    const UserSchema = new Schema({
        _id: Number,
        name: String,
        email: String
    })
    User = mongoose.model('User', UserSchema)

    module.exports = User
 
 
