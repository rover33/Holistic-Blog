//Comment for testing 
const express = require('express');
const app = express();
const routes = require('./config/routes');
const path = require('path');

require('dotenv').config();

let PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist'));
app.use(function(request, response, next){
	console.log('Hit');
	next();
});

app.use('/', routes);

app.listen(PORT, function(){
	console.log('Listening');
});

 //CORS setup to allow other ports from this host

  //Only needed if not on Heroku/prod
  if(!process.env.DYNO) {
    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Credentials", "true");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
      next();
    });
  }