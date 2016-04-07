var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tunely");

module.exports.Scripture = require('./scripture.js');
