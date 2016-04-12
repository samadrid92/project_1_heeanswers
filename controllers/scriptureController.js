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
  var getEmotion = req.params.emotion;
  db.Scripture.find({emotion: getEmotion}).populate('help_index').exec(function getEmotionPassage(err, foundEmotionScripture){
    if(err){console.log(err);}
    console.log(foundEmotionScripture);
    res.send(foundEmotionScripture);
  });
}

// POST a new scripture (admin)
function create(req, res){
  console.log('body', req.body);
  var newScripture = new db.Scripture({
    scripture: req.body.scripture,
    verse: req.body.verse,
    emotion: req.body.emotion
  });
  newScripture.save(function(err, scripture){
    if(err){return console.log("save error: " + err);}
    console.log("saved", scripture.scripture);
    res.send(scripture);
  });
}


//Delete a scripture (admin)
function destroy(req, res){
  var deleteId = req.params.emotion_id;
  console.log(deleteId);

  db.Scripture.findOneAndRemove({_id: deleteId}, function(err, foundScripture){
    console.log(foundScripture);
    res.send(foundScripture);
  });
}

//PUT new info on existing scripture (admin)
function update(req, res){
  console.log(req.body._id);
  db.Scripture.findOne({_id: req.body._id}, function(err, foundScripture){
    if(err){console.log(err);}
    console.log(foundScripture);
    foundScripture.scripture = req.body.scripture;
    foundScripture.verse = req.body.verse;
    foundScripture.save(function(err, savedScripture){
      if(err){console.log('saved failed!');}
    });
    res.send(foundScripture);
  });
}

// export public methods here
module.exports = {
  index: index,
  show: show,
  create: create,
  destroy: destroy,
  update: update
};
