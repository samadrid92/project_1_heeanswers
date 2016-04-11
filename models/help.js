var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var helpSchema = new Schema ({
  title: String,
  help_link: String,
  emotion: String
});

var Help = mongoose.model('Help', helpSchema);
module.exports = Help;
