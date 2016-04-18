console.log("sanity check");

$(document).ready(function() {
  console.log("app.js works");
  //event handler to change text on drop down menu

  /*TODO: combine the two listeners into one code block. -jc */
  $('.emotion-selection').on('click', function(){
      var chosenEmotion = $(this).text();
      $('.button-text').text(chosenEmotion);
    });

  $('.emotion-selection').on('click', function(e){
    $('#dropdownMenu1').hide();
    e.preventDefault();
    var emotion = $(this).attr("value");
    $.ajax({
      method: "GET",
      url: "/api/scriptures/" + emotion,
      success: returnedScripture,
      error: returnedError
    });

  });

  /* TODO: create a button to allow users to go back to an emotion selection to use your site to access more than one time per visit -jc */
});

//GET one success and error functions
function returnedScripture(viewScripture){
  console.log(viewScripture);
  /* TODO: pull your randomizer out of the array index location to make it easiser to read -jc */
  var oneRandomScripture = viewScripture[Math.floor(Math.random()*viewScripture.length)];
  console.log(oneRandomScripture);
  renderScripture(oneRandomScripture);
}
function returnedError(err){
  /* TODO: This shows the error to the user - that's a bit dangeorus. Consider just console logging out the error instead. -jc */
  alert(err);
}

//render function
function renderScripture(data) {
      /* TODO: consider hoisting the first two lines below up into your document.ready section.  Then when you call renderScripture you will not be selecting html and compiling the same code over and over (more DRY)-jc */
  var scriptureHtml = $('#scripture-template').html();
  var scriptureTemplate = Handlebars.compile(scriptureHtml);
  var html = scriptureTemplate({scripture: data});
  $('#scripture-target').append(html);
 }
