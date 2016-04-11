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
    var value = $(this).attr("value");
    $.ajax({
      method: "GET",
      url: "/api/scriptures/" + value,
      success: returnedScripture,
      error: returnedError
    });


  });

});

function returnedScripture(viewScripture){
  console.log(viewScripture);
  var oneRandomScripture = viewScripture[Math.floor(Math.random()*viewScripture.length)];
  console.log(oneRandomScripture);
  renderScripture(oneRandomScripture);


}

function returnedError(err){
  alert(err);
}





function renderScripture(data) {
  var scriptureHtml = $('#scripture-template').html();
  var scriptureTemplate = Handlebars.compile(scriptureHtml);
  var html = scriptureTemplate({scripture: data});
  $('#scripture-target').append(html);
 }
