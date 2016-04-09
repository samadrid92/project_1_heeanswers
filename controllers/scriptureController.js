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

//GET one emotion's scripture (user)
function show(req, res){
  var getEmotion = req.body.emotion;
  db.Scripture.find({emotion: getEmotion}, function getEmotionPassage(err, foundEmotionScripture){
    if(err){console.log(err);}
    console.log(foundEmotionScripture);
    res.send(foundEmotionScripture);
  });
}

//POST a new scripture
function create(req, res){
  console.log('body', req.body);
  var newScripture = new db.Scripture({
    scripture: req.body.scripture,
    verse: req.body.verse,
    emotion: req.body.emotion
  });

  
}

//Delete a scripture

//PUT new info on existing scripture

// export public methods here
module.exports = {
  index: index,
  show: show
  // create: create,
  // destroy: destroy,
  // update: update
};
