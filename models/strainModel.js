const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const strainSchema = new Schema({
  user: {
    type: String,
    required: true
  },
  strain_name: {
    type: String,
    required: true
  },
  strain_image: {
    type: String,
    required: true
  },
  strain_type: {
    type: String,
    required: true
  },
  strain_effects: {
    type: String,
    required: true
  },
  strain_thc: {
    type: String,
    required: true
  },
  strain_cbd: {
    type: String,
    required: true
  }
});

const Strain = mongoose.model('Strain', strainSchema);

module.exports = Strain;
