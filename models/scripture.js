var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Help = require('./help.js');

var scriptureSchema = new Schema({
  scripture: String,
  verse: String,
  emotion: String,
  help_link: [Help.schema]
});

var Scripture = mongoose.model('Scriptures', scriptureSchema);
module.exports = Scripture;
