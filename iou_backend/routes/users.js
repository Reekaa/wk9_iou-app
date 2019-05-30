var express = require('express');
var router = express.Router();
const MongoHelper = require('../db/mongo_helper.js')

router.post('/', function(req, res) {
  MongoHelper.create('users', req.body).then(results => {
    res.status(201).json('added user');
  })
});

router.get('/', function(req, res) {
  MongoHelper.get('users').then(result => {
    res.status(200).json(result)
  })
});

router.delete("/:id", function(req, res) {
  MongoHelper.delete("users", req.params.id).then(results => {
    res.status(204).json("User deleted");
  });
});

module.exports = router;
