var mongoose = require('mongoose')

var Schema = mongoose.Schema

var BookSchema = new Schema({
    book: { type: String, required: true },
    category: { type: [String], required: true },
    price: { type: Number, required: false },
    quantity:{type: Number, required: false},
    description:{type: String, required: false}
    
})

module.exports = mongoose.model("Book",BookSchema)

