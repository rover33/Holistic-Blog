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
	.put((request, response) => {
		controllers.putProduct(request, response);
	})
	.delete((request, response) => {
		controllers.deleteProduct(request, response);
	});

router.route('/api/product/addNew')
	.post((request, response) => {
		controllers.addProduct(request, response);
	});

router.route('/api/checkQty')
	.get((request, response) => {
		controllers.checkQuantity(request, response);
});

router.route('/api/purchas')
	.post((request, response) => {
		controllers.placeOrder(request, response);
});

router.route('/api/checkAdmin/:id')
	.get((request, response) => {
		controllers.checkAdmin(request, response);
	})

router.route('/*')
	.get((request, response) => response.status(404).send(`OOPS (404) ! the page ${request.url} NOT FOUND`));


module.exports = router;