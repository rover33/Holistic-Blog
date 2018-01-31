const express = require('express');
const router = express.Router();

/*app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
  });*/
router.route('/')
	.get(function(request, response){
		response.send('Home Page');
	});

module.exports = router;