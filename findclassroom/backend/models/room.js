const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roomSchema = new Schema({
  
 
 
  name:{type:String, required: true},
  slot: {type: String, required: true},
  email: {type: String}
 
 
 
  // roomid:{type:Schema.Types.ObjectId, required: true},
 // location: { type: String, required: true },
 // name: { type: Number, required: true },
  //slots: [Boolean],
  //date: { type: Date, required: true },
}, {
  timestamps: true,
});

const room = mongoose.model('room', roomSchema);

module.exports = room;