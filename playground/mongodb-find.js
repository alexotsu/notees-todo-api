// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
// destructuring syntax for multiple object items

// let obj = new ObjectID();
// console.log(obj);

// **npm install mongodb@2.2.5 --save**
// let user = {name: 'alex', age: 25};
// let {name} = user;
// // Object destructuring syntax above pulls the property of the object it is set equal to, and can be used as below
// console.log(name);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server');



  // db.collection('Todos').find({
  //   _id: new ObjectID('59f5ebd121159827dcb88686')
  // }).toArray().then((docs) => {
  //   // in case of querying ID, need to use ObjectID constructor (hence defining it at beginning of file)
  // // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
  //   // inside of 'find', pass the query. In this simple case, just have to query by key/value pair
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch Todos', err)
  // });
  // .find method finds all by default until passing in an argument, returns MongoDB cursor which points to collection items. Those methods ('.toArray' is a common one) return the actual items
  // '.toArray' returns a promise, so can add '.then' after

  // db.collection('Todos').find().count().then((count) => {
  //   // count is another method on find, full list available at http://mongodb.github.io/node-mongodb-native/2.2/api/Cursor.html
  //   // find() finds everything in the 'Todos' collection, count() counts them, eventually returns 2 from the promise
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch Todos', err)
  // });

  // challenge: should return 2 Alex objects
  db.collection('Users').find({name: 'Alex'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  });


  //db.close();
  // 'db.close()' closes connection
});
// MongoClient is needed to connect to DB. 2 arguments: (stringWhereDBLives, callback)
// // error is for error, db is command used to read and write data
// test is default DB given by MongoDB, but can create any database name
