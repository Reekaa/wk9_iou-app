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
  static get(coll) {
    return MongoClient.connect(
      HOST,
      { useNewUrlParser: true }
    ).then(client => {
      const collection = client.db(DB_NAME).collection(coll);
      const users = collection.find().toArray()
      return users
    });
  }
  static setCurrent(coll, id, payload) {
    return MongoClient.connect(
      HOST,
      { useNewUrlParser: true }
    ).then(client => {
      const collection = client.db(DB_NAME).collection(coll);
      collection.findOne({"_id": ObjectID(id)})
        .then(doc => {
          collection.updateOne(
            { "_id": ObjectID(id)},
            {$set: {isCurrent: !doc.isCurrent}}
          )
        })
    })
  }

  static getByName(coll, name) {
    return MongoClient.connect(
      HOST,
      { useNewUrlParser: true }
    ).then(client => {
      const collection = client.db(DB_NAME).collection(coll);
      return collection.findOne({name: name})
    })
    .then((user) => {
      collection.updateOne(
        { "_id": ObjectID(user._id)},
        {$set: {isCurrent: !doc.isCurrent}}
      )
    })
  }

}

  module.exports = MongoHelper;
