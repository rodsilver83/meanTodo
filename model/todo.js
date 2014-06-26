var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TodoSchema = new Schema({
  text: String,
  colors: [{ color: String, image: String }]
});
mongoose.model('todo',TodoSchema);