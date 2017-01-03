var mongoose = require('mongoose');

let TodoSchema = mongoose.Schema({
  		task: String
})

  module.exports = mongoose.model('Todo',TodoSchema);
