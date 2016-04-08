console.log("sanity check");

$(document).ready(function() {
  console.log("app.js works");
  //event handler to change text on drop down menu
  $('.emotion-selection').on('click', function(){
      var chosenEmotion = $(this).text();
      $('.button-text').text(chosenEmotion);
    });

  $('.button-text').on('submit', function(e){
    e.preventDefault();
    $.ajax({
      method: "GET",
      url: "/api/scriptures",
      success: returnedScripture,
      error: returnedError
    });

  });

});

function returnedScripture(viewScripture){
  console.log(viewScripture);
  renderScripture(viewScripture);
}

function returnedError(err){
  console.log(err);
}





function renderScripture(data) {
  console.log('rendering scripture:', data);
  var scriptureHtml = $('#scripture-template').html();
  var scriptureTemplate = Handlebars.compile(scriptureHtml);
  var html = scriptureTemplate({scripture: data});
  $('#scripture-target').append(html);
 }
