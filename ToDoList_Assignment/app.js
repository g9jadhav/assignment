/**
 * Middleware where I am setting all the routers for our ToDo application while navigating
 * will pick view accordingly
 * Using express and express router
 * Usually here I am setting up my todo App
 */
var express = require('express');
var router = express.Router();
var login = require('./routes/loginroutes');
//body-parser to extract the entire body portion of an incoming request stream and exposes it on req.body .
var bodyParser = require('body-parser');
//to define the static path
var path = require('path');
//Here I am creating my app
var app = express();

router.use(bodyParser.urlencoded({ extended: true }));
router.post('/login',login.login);

//Very first view after hitting the server 
//would be login page.
app.get('/', function(req, res){
    res.sendFile(__dirname + '/views/login.html');
});

//After successful login
//will load todoList page
app.get('/todoList', function(req, res){
    res.sendFile(__dirname + '/views/todoList.html');
});

// Adding static files to public folders like jQuery, AngularJS etc.
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router);
module.exports = app;