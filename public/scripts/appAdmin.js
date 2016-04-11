console.log("sanity check");

$(document).ready(function() {
  console.log("app.js works");
  //saves a new scripture to database
  $('#createScripture').on('submit', function(e){
    e.preventDefault();
    var newScripture = $('#addScripture').val();
    var newVerse = $('#addVerse').val();
    var newEmotion = $('#addEmotion').val();
    console.log(newScripture);
    $.ajax({
      method: "POST",
      url: "/api/scriptures",
      data: {
        scripture: newScripture,
        verse: newVerse,
        emotion: newEmotion
      },
      success: newScriptureSuccess,
      error: newScriptureError
    });
  });
  //deletes a scripture by its ID
  $('#deleteScriptureForm').on('submit', function(e){
    e.preventDefault();
    console.log(this);
    var deleteId = $('#deleteScripture').val();
    console.log('deleteId', deleteId, 'abfjhaf');
    $.ajax({
        method: 'DELETE',
        url: '/api/scriptures/' + deleteId,
        success: deleteSuccessful,
        error: deleteError
    });
  });




  $('#showAllScripturesForm').on('submit', function(e){
    e.preventDefault();
    $.ajax({
      method: "GET",
      url: "/api/scriptures",
      success: gotAllScriptures,
      error: errorAllScriptures
    });
  });

});

function gotAllScriptures(data){
  renderScripture(data);
}

function errorAllScriptures(err){
  console.log(err);
}

function newScriptureSuccess(data){
  console.log(data);
  renderScripture(data);
}

function newScriptureError(err){
  alert(err);
}

function deleteSuccessful(data){
  var deletedScriptureId = data._id;
  console.log(deletedScriptureId);
  console.log('removing scripture:', data);
}

function deleteError(err){
  console.log(err);
}

function renderScripture(data) {
  console.log('rendering scripture:', data);
  var scriptureHtml = $('#scripture-template').html();
  var scriptureTemplate = Handlebars.compile(scriptureHtml);
  var html = scriptureTemplate({scripture: data});
  $('#scripture-target').append(html);
 }
