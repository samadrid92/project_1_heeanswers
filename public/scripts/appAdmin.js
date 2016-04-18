console.log("sanity check");

/* TODO: To make this page more user-friendly, consider adding buttons to update/delete next to each existing scripture instead of requiring a user to enter the id. -jc */
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
      /* TODO: create an object to pass to the data field OUTSIDE of the ajax call -jc */
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
  $('#showAllScripturesForm').on('submit', function(e){
    e.preventDefault();
    $.ajax({
      method: "GET",
      url: "/api/scriptures",
      success: gotAllScriptures,
      error: errorAllScriptures
    });
  });
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
      url: '/api/scriptures/' + updateId,
      data: {
        _id: updateId,
        scripture: newScripture,
        verse: newVerse
      },
      success: updateSuccessful,
      error: updateError
    });
  });

});
//UPDATE a scripture success and error functions
function updateSuccessful(data){
  console.log(data);
  renderScripture(data);
}
function updateError(err){
  console.log(err);
}

//GET all scriptures on admin page
function gotAllScriptures(data){
  console.log(data);
  /* TODO: If you set your renderScripture to only handle single scripture objects, then this call will send an array of scripture objects.  Use a forEach loop to execute a renderScripture on each object in the data array.-jc */
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
  renderScripture(data);
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
 /* TODO: based on how you call your renderScripture, it appears to render ONE scripture at a time. Change the handlebars script to only handle one scripture object (not one and also an array, that'll make your page puke). -jc */
 function renderScripture(data) {
   console.log('rendering scripture:', data);
   var scriptureHtml = $('#scripture-template').html();
   var scriptureTemplate = Handlebars.compile(scriptureHtml);
   var html = scriptureTemplate({scripture: data});
   $('#scripture-target').append(html);
 }
