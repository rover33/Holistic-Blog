const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');

/*app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
  });
This is commented out for testing purposes until the front end index is ready
  */
router.route('/')
	.get(function(request, response){
		controllers.getRoot(response);
	});

module.exports = router;