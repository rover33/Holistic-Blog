const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');

/*app.get('/*', function(req, res) {
    
  });
This is commented out for testing purposes until the front end index is ready
  */
/*router.route('/')
	.get((request, response) => {
		controllers.getRoot(response);
	});*/
router.route('/blogs')
	.get((request, response) => {
		controllers.getBlogs(response);
	});
router.route('/products')
	.get((request, response) => {
		controllers.getProducts(response);
	})

module.exports = router;