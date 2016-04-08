console.log("sanity check");

$(document).ready(function() {
  console.log("app.js works");

});

function renderScripture(data) {
  console.log('rendering scripture:', data);
  var scriptureHtml = $('#scripture-template').html();
  var scriptureTemplate = Handlebars.compile(scriptureHtml);
  var html = scriptureTemplate({scripture: data});
  $('#scripture-target').append(html);
 }
