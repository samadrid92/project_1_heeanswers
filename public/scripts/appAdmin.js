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
    console.log('deleteId', deleteId);
    $.ajax({
        method: 'DELETE',
        url: '/api/scriptures/' + deleteId,
        success: deleteSuccessful,
        error: deleteError
    });
  });
  //show all scriptures on screen
  // $('#showAllScripturesForm').on('submit', function(e){
  //   e.preventDefault();
  //   $.ajax({
  //     method: "GET",
  //     url: "/api/scriptures",
  //     success: gotAllScriptures,
  //     error: errorAllScriptures
  //   });
  // });
  //update a scripture
  $('#updateScriptureForm').on('submit', function(e){
    e.preventDefault();
    console.log(this);
    var updateId = $('#selectScripture').val();
    console.log(updateId);
    var newScripture = $('#updateScripture').val();
    var newVerse = $('#updateVerse').val();
    $.ajax({
      method: 'PUT',
      url: '/api/scripture/' + updateId,
      data: {
        scripture: newScripture,
        verse: newVerse
      },
      success: updateSuccessful,
      error: updateError
    });
  });

});
//UPDATE a scripture success and error functions

//GET all scriptures on admin page
function gotAllScriptures(data){
  renderScripture(data);
}
function errorAllScriptures(err){
  console.log(err);
}

//DELETE success and error functions
function deleteSuccessful(data){
  var deletedScriptureId = data._id;
  console.log(deletedScriptureId);
  console.log('removing scripture:', data);
}
function deleteError(err){
  console.log(err);
}

//CREATE succes and error functions
 function newScriptureSuccess(data){
   console.log(data);
   renderScripture(data);
 }
 function newScriptureError(err){
   alert(err);
 }
//render function
 function renderScripture(data) {
   console.log('rendering scripture:', data);
   var scriptureHtml = $('#scripture-template').html();
   var scriptureTemplate = Handlebars.compile(scriptureHtml);
   var html = scriptureTemplate({scripture: data});
   $('#scripture-target').append(html);
 }
