const express = require('express');
const bcrypt =require('bcryptjs');
const router = express.Router();
const User = require("../models/user");

router.get("/",async (req, res) =>{
    try{
    const users = await User.find()
    //console.log(room)
    res.json({ users })
    }catch(error){
        res.json({error:error.message});
    }
});

router.route('/:id').get((req,res) => {
    User.findById(req.params.id)
     .then(user => res.json(user))
     .catch(err => res.status(400).json('Error: ' + err))
  });

  router.route('/signup').post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
  
    const newUser = new User({
      name,
      email,
      password
    });
  
    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });
 
module.exports = router;