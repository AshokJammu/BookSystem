const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
// mongoose.connect('mongodb+srv://ashok:Ashok@18@mongooseappcluster.feazr.mongodb.net/mongooseAppDB?retryWrites=true&w=majority',{ useNewUrlParser: true })
const books = require('./routes/book_router')
const users = require('./routes/user_router')

const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(fn='/api', books)
app.use(fn='/users',users)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
