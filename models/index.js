var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/project_1_heeanswers");

module.exports.Scripture = require('./scripture.js');
module.exports.Help = require('./help.js');
