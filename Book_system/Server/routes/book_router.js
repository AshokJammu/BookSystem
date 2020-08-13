var express = require('express')
var Book = require('../models/book_model')

var router = express.Router()

router.get('/',function(req,res){
    console.log('getting all books')
    Book.find({}).exec(function(err,book){
        if(err){
            res.send('error has occuresd')
        }
        else{
            console.log(book)
            res.json(book)
        }
    })
})

router.post('/', function(req, res){
    var newBook = new Book();
    newBook.book = req.body.book;
    newBook.category = req.body.category;
    newBook.price = req.body.price;
    newBook.quantity = req.body.quantity;
    newBook.description = req.body.description
    newBook.save(function(err, book){
        if(err) {
            res.send('error saving book');
        } else {
            console.log(book);
            res.send(book);
        }
    });
});

router.get('/:id',function(req,res){
    console.log('getting one books')
    Book.findOne({
        _id:req.params.id
    }).exec(function(err,book){
        if(err){
            res.send('error has occuresd')
        }
        else{
            console.log(book)
            res.json(book)
        }
    })
})

router.put('/:id',function(req,res){
    Book.findOneAndUpdate({
        _id: req.params.id
    },{
        $set:{
            book:req.body.book,
            category:req.body.category,
            price:req.body.price,
            quantity:req.body.quantity,
            description:req.body.description
        }
    },{
        upsert:true,new:true
    },function(err,book){
        if(err){
            res.send('error updating Book')
        }
        else{
            console.log(book)
            res.send(book)
        }
    })
})

router.delete('/:id',function(req,res){
    console.log('getting delete books')
    Book.findByIdAndRemove({
        _id:req.params.id
    }).exec(function(err,book){
        if(err){
            res.send('error has occuresd')
        }
        else{
            console.log(book)
            res.send(book)
        }
    })
})


module.exports = router