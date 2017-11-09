// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server');

  db.collection('Users').findOneAndUpdate({
     _id: new ObjectID('59f873edf153db2540bcdb8d')
  }, {
    $set: {
      name: 'Alex'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });


  // db.collection('Todos').findOneAndUpdate({
  //    _id: new ObjectID('59f89331e1f6394414f4536b')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });
  // findOneAndUpdate() takes 4 arguments: filter, update, options, callback. Returns a promise if no callback specified
  // filter is the document you want to apply the update to
  // update operators documentation here: https://docs.mongodb.com/manual/reference/operator/update/
  // update operator syntax doesn't look like normal JS, see documentation for more
  // see documentation for options as wellhttp://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html

  //db.close();
  // 'db.close()' closes connection
});
// MongoClient is needed to connect to DB. 2 arguments: (stringWhereDBLives, callback)
// // error is for error, db is command used to read and write data
// test is default DB given by MongoDB, but can create any database name
