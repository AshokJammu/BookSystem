const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://ashok:Ashok@18@mongooseappcluster.feazr.mongodb.net/mongooseAppDB?retryWrites=true&w=majority',{ useNewUrlParser: true })

const db = mongoose.connection

module.exports = db
