var express = require("express");
var User = require("../models/user_model");

var router = express.Router();

// Creating Post request

router.post("/", function (req, res) {
  var newUser = new User();
  (newUser.name = req.body.name),
    (newUser.username = req.body.username),
    (newUser.age = req.body.age),
    (newUser.email = req.body.email);

  newUser.save(function (err, user) {
    if (err) {
      res.send("user creating");
    } else {
      console.log(user);
      res.send(user);
    }
  });
});

// Getting data from route

router.get("/", function (req, res) {
  console.log("getting all books");
  User.find({}).exec(function (err, user) {
    if (err) {
      res.send("error has occured");
    } else {
      console.log(user);
      res.json(user);
    }
  });
});

// Updating user details
router.put('/:id',function(req,res){
    User.findOneAndUpdate({
        _id:req.params.id
    },{$set:{
        name:req.body.name,
        username:req.body.username,
        age:req.body.age,
        email:req.body.email
    }
},{
    upsert:true, new:true
},function(err,user){
    if(err){
        res.send('error updating user')
    }
    else{
        console.log(user)
        res.send(user)
    }
})
})

// Delete user
router.delete('/:id',function(req,res){
    console.log('getting delete user')
    User.findByIdAndRemove({
        _id:req.params.id
    }).exec(function(err,user){
        if(err){
            res.send('error has occuresd')
        }
        else{
            console.log(user)
            res.send(user)
        }
    })
})
module.exports = router;
