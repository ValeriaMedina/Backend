const { Schema, model } = require('mongoose');
require('./FraccionamientoModel')

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: String,
  password: {
    type: String,
    required: true
  },
  mail: {
    type: String,
    required: true,
    unique: true
  },
  phone: Number,
  houses: {
    number: String,
    role: String,
    m2: Number,
    coto: String
  },
  fraccionamiento: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'Fraccionamiento' 
  }]
});

module.exports = model('User', userSchema);