ObjectID = require("mongodb").ObjectID;
const DB_NAME = "iou_app";
const HOST = "mongodb://localhost:27017";
const MongoClient = require('mongodb').MongoClient;

class MongoHelper {

  static create(coll, payload) {
    return MongoClient.connect(
      HOST,
      { useNewUrlParser: true }
    ).then(client => {
      const collection = client.db(DB_NAME).collection(coll);
      return collection.insertOne(payload);
    });
  }

  static get(coll) {
    return MongoClient.connect(
      HOST,
      { useNewUrlParser: true }
    ).then(client => {
      const collection = client.db(DB_NAME).collection(coll);
      return collection.find().toArray();
    });
  }

  static delete(coll, id) {
    // Connect using the connection string
    return MongoClient.connect(
      HOST,
      { useNewUrlParser: true }
    ).then(client => {
      const collection = client.db(DB_NAME).collection(coll);
      return collection.deleteOne({ _id: ObjectID(id) });
    });
  }

  static addTask(coll, id, payload) {
    delete payload._id
    console.log(payload);
    return MongoClient.connect(
      HOST,
      { useNewUrlParser: true }
    ).then(client => {
      const collection = client.db(DB_NAME).collection(coll);
      return collection.updateOne(
        { "_id": ObjectID('5cefdf8cd5f95eb68e8f25dd'), "groups.groupName": "SW2"},
        {"$push": { "groups.$.completedTasks": payload}}
      )
    })
  }

}

  module.exports = MongoHelper;
