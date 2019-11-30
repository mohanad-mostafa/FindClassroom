const bcrypt =require('bcryptjs');
const router = require('express').Router();
const Rooms = require('../models/room'); 

router.get("/",async (req, res) =>{
    try{
    const room = await Rooms.find()
    //console.log(room)
    res.json({ room })
    }catch(error){
        res.json({error:error.message});
    }
});


router.route('/add').post((req, res) => {
    const location = req.body.location;
    const name = Number(req.body.name);
    const slots = req.body.slots;
    const date = Date.parse(req.body.date);
  
    const newRoom = new Rooms({
      location,
      name,
      slots,
      date,
    });
  
    newRoom.save()
    .then(() => res.json('Exercise added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;

