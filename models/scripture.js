var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var scriptureSchema = new Schema({
  scripture: String,
  verse: String,
  emotion: String,
  help_link: String
});

var Scripture = mongoose.model('Scripture', scriptureSchema);
module.exports = Scripture;
