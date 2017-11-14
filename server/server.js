const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

// npm install mongoose
// const mongoose = require('mongoose')
let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');


let app = express();


app.use(bodyParser.json());

// pattern for structuring API URLs: /directory for post.
// .post('url', callback(req, res))
app.post('/todos', (req, res) => {
  let todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({
      todos
    })
    // better to use an object containing the array instead of only the array, allows for adding custom conditions later if desired
  }, (e) => {
    res.status(400).send(e);
  });
});

// Get /todos/id
// url param is a colon followed by a callback, the param is wahatever is after the colon
app.get('/todos/:id', (req, res) => {
  // req.params returns a key:value, key is url param and value is whatever value returns from the callback
  let id = req.params.id;

  // validate ID using ObjectID.isValid
    // respond w/ 404 if not. Send back empty body
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  };
  // findById using ID
    // success
      // if todo => send back
      // if not => send back 404 w/ empty body
    // error => 400 - send empty body back
  Todo.findById(id, (e, todo) => {
    if(!todo) {
      return res.status(404).send()
    }
    if(e) {
      return res.status(400).send()
    }
    return res.send({todo});
  });
  // Todo.findById(id).then((todo) => {
  //   if(!todo){
  //     res.status(404).send('Todo not found');
  //   }
  //   res.send(todo);
  // }, (e) => {
  //   res.status(400).send('ID not found')
  // });

});


app.listen(3000, () => {
  console.log('Running on Port 3000')
});

module.exports = {app};

// mongoose.Promise = global.Promise;
// // mongoose supports Promises by defualt, but have to specify which one (in case of wanting to use a special library or something)
// mongoose.connect('mongodb://localhost:27017/TodoApp');
// // mongoose connects with database in the same way as MongoClient, but doesn't require a callback. For example, waits until connection is established to run any code after connect request

// // need to create a mongoose model so it knows how to store data
// let Todo = mongoose.model('Todo', {
//   // lots of info available for model properties in mongoose documentation
//   text: {
//     type: String,
//     required: true,
//     // 'required' means the field is required
//     minlength: 1,
//     // another validator. Complete documentation: http://mongoosejs.com/docs/validation.html
//     trim: true
//     // 'trim' removes all leading and failing whitespaces. Awesome
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   },
//   completedAt: {
//     type: Number,
//     default: null
//   }
// });
// // .model(stringName, {object: defining various parts of the model})
//
// let newTodo = new Todo({
//   text: 'Cook dinner'
// });
// // created the constructor function for Todo above, so need to call a new instance of it. The argument becomes the object passed in as the 2nd argument in the constructor
//
// newTodo.save().then((doc) => {
//   console.log(`Saved todo ${doc}`)
// }, (e) => {
//   console.log('unable to save todo')
// });
// // .save() is needed to actually update the datbase, returns a promise.
//
//
//
// let secondTodo = new Todo({
//   text: 'Learn code',
//   completed: false,
//   completedAt: -1
// });
//
// secondTodo.save().then((res) => {
//   console.log(`Saved todo ${res}`)
// }, (e) => {
//   console.log(`Error ${e}, unable to save`)
// });

// // new user model. Set up email: required, trimmed, type = String, minlength 1
//
// // User should get moved to user.js (file specifically for models)
// let User = mongoose.model('User', {
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     minlength: 1
//   }
// });
//
// let addUser = new User({
//   email: 'alexotsu@gmail.com'
// });
//
// addUser.save().then((doc) => {
//   console.log(`User with email ${doc.email} saved`)
// }, (e) => {
//   console.log('error ', e)
// });
