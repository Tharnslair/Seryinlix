// required files

var express = require('express');
    stylus = require('stylus');
    logger = require('morgan');
    bodyParser = require('body-parser');

// Basic config

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str, path) {
    return stylus(str).set('filename', path);
}

// Express config

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser());
app.use(stylus.middleware(
    {
        src: __dirname + '/public',
        compile: compile
    }
));

// Routes

app.get('*', function(req, res) {
    res.render('index');
});

// static routing to public directory

app.use(express.static(__dirname + '/public'));

// listen on the port....

var port = 1130;

app.listen(port);

console.log('Listening on port.... ' + port + '.....');