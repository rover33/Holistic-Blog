//Comment for testing 
const express = require('express');
const app = express();
const path = require('path')
require('dotenv').config()

let PORT = process.env.PORT || 3000;

app.use(function(request, response, next){
	console.log('Hit');
	next();
})

app.get('/', function(request, response){
	response.send('Home Page');
})
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