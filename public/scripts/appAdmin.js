console.log("sanity check");

$(document).ready(function() {
  console.log("app.js works");

  // $('#createScripture').on('submit', function(e){
  //   e.preventDefault();
  //   var newScripture = $('#addScripture').val();
  //   var newVerse = $('#addVerse').val();
  //   var newEmotion = $('#addEmotion').val();
  //   console.log('formData', formData);
  //   $.ajax({
  //     method: "POST",
  //     url: "/api/scriptures",
  //     data: {
  //       scripture: newScripture,
  //       verse: newVerse,
  //       emotion: newEmotion
  //     },
  //     success: newScriptureSuccess,
  //     error: newScrptureError
  //   });
  });



  // $('.btn-default-showall').on('submit', function(e){
  //   e.preventDefault();
  //   $.ajax({
  //     method: "GET",
  //     url: "/api/scriptures",
  //     data: $(this).serialize(),
  //     success: gotAllScriptures,
  //     error: errorAllScriptures
  //   });
  // });

});

function gotAllScriptures(data){
  console.log(data);
}

function errorAllScriptures(err){
  alert(err);
}

function renderScripture(data) {
  console.log('rendering scripture:', data);
  var scriptureHtml = $('#scripture-template').html();
  var scriptureTemplate = Handlebars.compile(scriptureHtml);
  var html = scriptureTemplate({scripture: data});
  $('#scripture-target').append(html);
 }
