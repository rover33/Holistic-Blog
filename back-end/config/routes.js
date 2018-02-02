const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');

router.route('/api/blogs')
	.get((request, response) => {
		controllers.getBlogs(response);
	});

router.route('/api/blog/:id')
	.get((request, response) => {
		controllers.getBlog(request, response);
	});

router.route('/api/products')
	.get((request, response) => {
		controllers.getProducts(response);
	});

router.route('/api/product/:id')
	.get((request, response) => {
		controllers.getProduct(request, response);
	})
module.exports = router;