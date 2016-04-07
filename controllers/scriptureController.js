var db = require('../models');

//GET a scripture
function index(req, res){
  db.Scripture.find({}, function(err, allScriptures){
    if(err){console.log(err);}
  });
  res.json(allScriptures);
}

// export public methods here
module.exports = {
  index: index
  // create: create,
  // show: show,
  // destroy: destroy,
  // update: update
};
