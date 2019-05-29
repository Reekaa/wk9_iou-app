var express = require('express');
var router = express.Router();
const MongoHelper = require('../db/mongo_helper.js')

router.post('/', function(req, res) {
  MongoHelper.create('tasks', req.body).then(results => {
    res.status(201).json('added tasks');
  })
});

router.get('/', function(req, res) {
  MongoHelper.get('tasks').then(result => {
    res.status(200).json(result)
  })
});

router.delete("/:id", function(req, res) {
  MongoHelper.delete("tasks", req.params.id).then(results => {
    res.status(204).json("Deleted tasks");
  });
});

module.exports = router;
