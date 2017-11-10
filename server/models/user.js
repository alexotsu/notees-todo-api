let mongoose = require('mongoose')

let User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});


// addUser.save().then((doc) => {
//   console.log(`User with email ${doc.email} saved`)
// }, (e) => {
//   console.log('error ', e)
// });


module.exports = {User}
