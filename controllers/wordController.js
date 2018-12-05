const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Word
      .findAll(req.query)
      .sort({date : -1})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllNouns: function(req, res) {
    db.Word
      .find({ partOfSpeech: noun })
      .sort({date : -1})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllVerbs: function(req, res) {
    db.Word
      .find({ partOfSpeech: verb })
      .sort({date : -1})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllAdjectives: function(req, res) {
    db.Word
      .find({ partOfSpeech: adjective })
      .sort({date : -1})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req,res) {
    db.Word
      .findById(req.params.id)
      .then(dbModel => res.json)
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("inside create, req.body");
    db.Word
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Word
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};