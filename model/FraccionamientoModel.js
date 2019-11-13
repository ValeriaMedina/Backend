const { Schema, model } = require('mongoose');

const fraccionamientoSchema = new Schema({
  nombre: String,
  casas: Number
});

module.exports = model('Fraccionamiento', fraccionamientoSchema);