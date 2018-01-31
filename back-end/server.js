//Comment for testing 
const express = require('express');
const app = express();

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