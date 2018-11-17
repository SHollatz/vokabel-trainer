const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const verbSchema = new Schema({
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
  thirdPersPresent: {
    type: String,
    required: true,
    minlength: [2, "Please enter a word with at least 2 characters."],
  },
  thirdPersonPast: {
    type: String,
    required: true,
    minlength: [2, "Please enter a word with at least 2 characters."],
  },
  thirdPersonPerfect: {
    type: String,
    required: true,
    minlength: [2, "Please enter a word with at least 2 characters and it's auxiliary verb."],
  },
  separable: {
    type: Boolean,
    required: true
  }
});