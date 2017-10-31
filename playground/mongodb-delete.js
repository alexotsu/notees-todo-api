// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server');

  // // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((res) => {
  //   console.log(res);
  // });
  // // lots of output, but only important is at top *{ result: {ok: 1, n:3}, ...} means ran without errors, and 3 files were affected

  // // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((res) => {
  //   console.log(res);
  // });
  // // works same as deleteMany, but stops after first item that it sees that matches criteria

  // // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });
  // // this method gets document back in promise (not result)

  // db.collection('Users').deleteMany({name: 'Alex'}).then((res) => {
  //   console.log(`${res.result.n} records deleted successfully`)
  // }, (err) => {
  //   console.log(`Error, ${err}`)
  // });



  db.collection('Users').findOneAndDelete({
    _id: 123 
  }).then((res) => {
    console.log(res)
  }, (err) => {
    console.log(`Error, ${err}`)
  });

  //db.close();
  // 'db.close()' closes connection
});
// MongoClient is needed to connect to DB. 2 arguments: (stringWhereDBLives, callback)
// // error is for error, db is command used to read and write data
// test is default DB given by MongoDB, but can create any database name
