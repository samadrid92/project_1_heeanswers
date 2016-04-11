var mongoose = require("mongoose");
mongoose.connect( process.env.MONGOLAB_URI ||
                  process.env.MONGOHQ_URL ||
                  "mongodb://localhost/project_1_heeanswers");

module.exports.Scripture = require('./scripture.js');
module.exports.Help = require('./help.js');
