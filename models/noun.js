const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nounSchema = new Schema({
  word: {
    type: String,
    required: true,
    minlength: [2, "Please enter a word with at least 2 characters."],
  },
  translation1: {
    type: String,
    required: true,
    minlength: [1, "Please enter a word with at least 1 character." ]
  },
  translation2: {
    type: String,
    required: false
  },
  translation3: {
    type: String,
    required: false
  },
  meaning1: {
    type: String,
    required: true,
    minlength: [2, "Please enter a word or sentence with at least 2 characters."],
  },
  meaning2: {
    type: String,
    required: false
  },
  meaning3: {
    type: String,
    required: false
  },
  article: {
    type: String,
    required: true,
    enum: ['der', 'die', 'das', 'ein', 'eine']
  },
  gender: {
    type: String,
    required: true,
    enum: ['Maskulinum', 'Femininum', 'Neutrum']
  },
  plural: {
    type: String,
    required: true,
    minlength: [2, "Please enter a word with at least 2 characters."],
  },


});