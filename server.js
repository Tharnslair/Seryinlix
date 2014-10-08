/**
 * Created by 16848519 on 10/8/2014.
 */

// required files
var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

// config

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

// Routes

app.get('*', function(req, res) {
    res.render('index');
});

// listen on the port....

var port = 1130;

app.listen(port);

console.log('Listening on port.... ' + port + '.....');