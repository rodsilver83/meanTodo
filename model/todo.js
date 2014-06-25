var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TodoSchema = new Schema({
  text: String
});
mongoose.model('todo',TodoSchema);