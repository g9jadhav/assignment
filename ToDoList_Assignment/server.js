/**
 * Here I am setting up my server, our application will run on 7878 port
 * The URL will be : http://localhost:7878
 */

var app = require('./app');
var port = process.env.PORT || 7878;
var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});