var db = require('../models');

//GET all scriptures (admin)
function index(req, res){
  db.Scripture.find({}, function(err, allScriptures){
    if(err){
      console.log(err);
    }
    console.log(allScriptures);
    res.send(allScriptures);
  });
}

//GET one scripture (user)
function show(req, res){
  var getEmotion = req.params.emotion;
  db.Scripture.find({emotion: getEmotion}, function getEmotionPassage(err, foundEmotionScripture){
    if(err){console.log(err);}
    console.log(foundEmotionScripture);
    res.send(foundEmotionScripture);
  });
}

// export public methods here
module.exports = {
  index: index,
  show: show
  // create: create,
  // destroy: destroy,
  // update: update
};
