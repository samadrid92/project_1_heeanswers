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
    var value = $(".emotion-selection").attr("value");
    console.log(value);
    console.log("1st this", this);
    $.ajax({
      method: "GET",
      url: "/api/scriptures/:emotion",
      success: returnedScripture,
      error: returnedError
    });


  });

});

function returnedScripture(viewScripture){
  console.log(viewScripture);
  randomScripture(viewScripture);
  renderScripture(viewScripture);
}

function returnedError(err){
  alert(err);
}





function renderScripture(data) {
  console.log('rendering scripture:', data);
  var scriptureHtml = $('#scripture-template').html();
  var scriptureTemplate = Handlebars.compile(scriptureHtml);
  var html = scriptureTemplate({scripture: data});
  $('#scripture-target').append(html);
 }
 //function to produce one random scripture
 function randomScripture(oneRandom){
   var oneRandomScripture = oneRandom[Math.floor(Math.random()*oneRandom.length)];
   return oneRandom;
 }
