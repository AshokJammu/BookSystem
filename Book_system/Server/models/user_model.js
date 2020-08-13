var mongoose = require('mongoose')

var Schema = mongoose.Schema

var UserSchema = new Schema({
    name:String,
    username:String,
    age:Number,
    email:String,
    password:String
})

module.exports = mongoose.model("User",UserSchema)
