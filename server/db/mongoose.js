// mongoose configuration should live here

const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
// mongoose supports Promises by defualt, but have to specify which one (in case of wanting to use a special library or something)
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');
// Need to add the first argument, which is similar to the port arg in server.js, but for connecting to the database. MONGODB_URI lives in process.env

module.exports = {
  mongoose
};
