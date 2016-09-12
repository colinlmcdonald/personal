var express = require('express');
var fs = require('fs');

var app = express();

var port = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(port, function(err, success) {
  if (err) {
    console.log(err);
  } else {
    console.log('Listening in on: ', port);
  }
});