// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
// generate a new express app and call it 'app'
var app = express();

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

// We'll serve jQuery and bootstrap from a local bower cache avoiding CDNs
// We're placing these under /vendor to differentiate them from our own assets
app.use('/vendor', express.static(__dirname + '/bower_components'));

var controllers = require('./controllers'),
    db = require('./models'),
    bodyParser = require('body-parser');

//body parserconfig to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));
/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});
app.get('/admin', function adminHomepage (req, res) {
  res.sendFile(__dirname + '/views/indexAdmin.html');
});

/*
 * JSON API Endpoints
 */
app.get('/api', controllers.api.index);
app.get('/api/scriptures', controllers.scriptures.index);
/* TODO: consider creating a query section to your index where instead of having a route below with the :emotion parameter.  One possible example would be :

  api/scriptures/:emotion (not so good)
  api/scriptures?emotion=sad (better)
  api/scriptures/:scriptureId (better)

this allows you to access specific scriptures instead of constantly pulling ALL of the scriptures. */
app.get('/api/scriptures/:emotion', controllers.scriptures.show);
app.post('/api/scriptures', controllers.scriptures.create);
app.delete('/api/scriptures/:emotion_id', controllers.scriptures.destroy);
app.put('/api/scriptures/:emotion', controllers.scriptures.update);

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
