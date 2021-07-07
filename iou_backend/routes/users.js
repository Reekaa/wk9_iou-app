var express = require('express');
var router = express.Router();
const MongoHelper = require('../db/mongo_helper.js')

router.post('/', function(req, res) {
  MongoHelper.create('users', req.body).then(results => {
    res.status(201).json('added user');
  })
});

router.get('/:name', function(req, res) {
  MongoHelper.getByName('users', req.params.name).then(result => {
    res.status(200).json(result)
  })
});

router.get('/', function(req, res) {
  console.log('hello');
  MongoHelper.get('users').then(result => {
    res.status(200).json(result)
  })
});

router.delete("/:id", function(req, res) {
  MongoHelper.delete("users", req.params.id).then(results => {
    res.status(204).json("User deleted");
  });
});

router.put("/:id/task", function(req, res) {
  MongoHelper.addTask("users", req.params.id, req.body).then(result => {
    res.status(201).json('task added')
  })
})

router.put("/:id/karma", function(req, res) {
  MongoHelper.addKarma('users', req.params.id, req.body.karma).then(results => {
    MongoHelper.get('users').then(karma => {
      res.status(200).json(karma)
    })
  })
})

// adding here
router.put("/:id/request", function(req, res) {
  MongoHelper.addRequest("users", req.params.id, req.body).then(result => {
    res.status(201).json('request added')
  })
})

router.put("/:id/current", function(req, res) {
  MongoHelper.setCurrent('users', req.params.id).then(result => {
    MongoHelper.get('users').then(current => {
    res.status(200).json(current)
    })
  })
})


module.exports = router;
