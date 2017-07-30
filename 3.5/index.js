var express = require('express');
var app = express();
var url = require('url');
var morgan = require('morgan');
var bodyParser = require('body-parser');

app.use(morgan('short'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('views', './views');
app.set('view engine','ejs');

app.get('/', function(req,res){
	res.render('pages/four');
});

app.get('/basicform', function(req,res){
	res.render('pages/five');
});

app.post('/basicform', function(req,res){
	console.log(req.body.inputEmail3 + " , " + req.body.inputPassword3);
	res.send('Login Successful');
});

var memberAPI = express.Router();

memberAPI.get('/', function(req,res){
	res.send('Member Home Page');
});

memberAPI.get('/profile',function(req, res){
	res.send('Member Profile page');

});

memberAPI.get('/changePassword',function(req, res){
	res.send('Member Password change request');

});

var adminAPI = express.Router();

adminAPI.get('/',function(req, res){
	res.send('Admin Home page');
});

adminAPI.get('/',function(req, res){
	res.send('Admin Home page');
});

app.use('/api/member',memberAPI);
app.use('/api/admin',adminAPI);
app.use(express.static(__dirname + '/public'));

app.listen(8080,function(){
	console.log('Server listening on port 8080');
});


