console.log("sanity check");

$(document).ready(function() {
  console.log("app.js works");
  //event handler to change text on drop down menu
  $('.emotion-selection').on('click', function(){
      var chosenEmotion = $(this).text();
      $('.button-text').text(chosenEmotion);
    });

  $('.emotion-selection').on('click', function(e){
    e.preventDefault();
    var emotion = $(this).attr("value");
    $.ajax({
      method: "GET",
      url: "/api/scriptures/" + emotion,
      success: returnedScripture,
      error: returnedError
    });


  });

});
//GET one success and error functions
function returnedScripture(viewScripture){
  console.log(viewScripture);
  var oneRandomScripture = viewScripture[Math.floor(Math.random()*viewScripture.length)];
  console.log(oneRandomScripture);
  renderScripture(oneRandomScripture);
}
function returnedError(err){
  alert(err);
}

//render function
function renderScripture(data) {
  var scriptureHtml = $('#scripture-template').html();
  var scriptureTemplate = Handlebars.compile(scriptureHtml);
  var html = scriptureTemplate({scripture: data});
  $('#scripture-target').append(html);
 }
