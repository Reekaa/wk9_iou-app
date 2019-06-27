var express = require('express');
var router = express.Router();
const MongoHelper = require('../db/mongo_helper.js')

router.post('/', function(req, res) {
  MongoHelper.create('tasks', req.body).then(results => {
    MongoHelper.get('tasks').then(tasks => {
      res.status(200).json(tasks);
    })
  });
})

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

//
// /* create a new post */
// router.post("/scores", function(req, res) {
//   MongoHelper.create("scores", req.body).then(results => {
//     MongoHelper.get("scores").then(scores => {
//       const newArray = [...scores].sort((a,b) => {
//         return b.score - a.score
//       })
//     res.status(200).json(newArray)
//     })
//   })
// })
