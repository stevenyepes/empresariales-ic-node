var express = require('express');
var app = express();
var empresarialesIcNode = require('./empresariales-ic-node');

app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('Hello World - App Empresariales Exitoso!');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});