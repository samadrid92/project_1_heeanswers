var db = require('../models');

function index(req, res){
  console.log(req.body._id);
  db.Scripture.findOne(req.params._id, function (err, foundScripture){
    console.log('should show songs:', foundScripture.help_link);
    res.send(foundScripture.help_link);
  });
}

module.exports = {
  index: index
  // create: create,
  // update: update,
  // destroy: destroy
};
