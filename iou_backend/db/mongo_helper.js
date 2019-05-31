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
      console.log('hi', client);
      const collection = client.db(DB_NAME).collection(coll);
      const users = collection.find().toArray()
      console.log('hello', users);
      return users
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
    return MongoClient.connect(
      HOST,
      { useNewUrlParser: true }
    ).then(client => {
      const collection = client.db(DB_NAME).collection(coll);
      return collection.updateOne(
        { "_id": ObjectID(id), "groups.groupName": "SW2"},
        {"$push": { "groups.$.completedTasks": payload}}
      )
    })
  }

  static addKarma(coll, id, payload) {
    console.log(payload);
    return MongoClient.connect(
      HOST,
      { useNewUrlParser: true }
    ).then(client => {
      const collection = client.db(DB_NAME).collection(coll);
      return collection.updateOne(
        { "_id": ObjectID(id), "groups.groupName": "SW2"},
        {$inc: {"groups.$.karma": payload}}
      )
    })
  }

  static getByName(coll, name) {
    return MongoClient.connect(
      HOST,
      { useNewUrlParser: true }
    ).then(client => {
      const collection = client.db(DB_NAME).collection(coll);
      return collection.findOne({name: name})
    });
  }

}

  module.exports = MongoHelper;
