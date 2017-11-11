let mongoose = require('mongoose');

// need to create a mongoose model so it knows how to store data
let Todo = mongoose.model('Todo', {
  // lots of info available for model properties in mongoose documentation
  text: {
    type: String,
    required: true,
    // 'required' means the field is required
    minlength: 1,
    // another validator. Complete documentation: http://mongoosejs.com/docs/validation.html
    trim: true
    // 'trim' removes all leading and failing whitespaces. Awesome
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});
// .model(stringName, {object: defining various parts of the model})

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


let secondTodo = new Todo({
  text: 'Do something',
  completed: true,
  completedAt: 123
});

// secondTodo.save().then((res) => {
//   console.log(`Saved todo ${res}`)
// }, (e) => {
//   console.log(`Error ${e}, unable to save`)
// });

module.exports = {Todo};
