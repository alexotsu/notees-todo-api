// mongoose configuration should live here

const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
// mongoose supports Promises by defualt, but have to specify which one (in case of wanting to use a special library or something)
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
};
