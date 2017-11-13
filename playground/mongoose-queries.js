const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

let id = '5a09a009ed35ccd4525ab424';
// let id = '6a09a009ed35ccd4525ab42411';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   // mongoose makes it so that you don't need to convert string into objectID using _id = new objectID(idString)
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// // .findOne({obj}) finds the first instance
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// // .findById(id) only takes id as argument, does what it sounds like
// Todo.findById(id).then((todo) => {
//   // handling errors
//   if (!todo) {
//     return console.log('Id not found')
//   }
//   console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));

// User.findById: query works, but no user || user found || handle any errors
User.findById('5a05b312d74e87442a003588').then((user) => {
  if(!user) {
    return console.log('User not found');
  }
  return console.log(`User's email is ${user.email}`);
}, (e) => {
  console.log(e);
});
// }).catch((e) => {
//   console.log(`Error was ${e}`);
// });
